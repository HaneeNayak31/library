import React, { useMemo, useState } from 'react';
import { CalendarDays, Edit2, ImagePlus, MapPin, Plus, Search, Trash2 } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminModal, AdminPageHeader, Badge, ToastStack } from './AdminUI';

const ManageEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 'EVT-10',
      title: 'Orientation Program for First Year Students',
      description: 'An onboarding session covering library resources and circulation process.',
      date: '2026-03-15',
      location: 'Main Reading Hall',
      image: '',
      status: 'Upcoming',
    },
    {
      id: 'EVT-11',
      title: 'Research Methodology Workshop',
      description: 'Hands-on workshop with citation and journal discovery tools.',
      date: '2026-03-20',
      location: 'Seminar Room B',
      image: '',
      status: 'Upcoming',
    },
    {
      id: 'EVT-12',
      title: 'Book Exhibition',
      description: 'Showcasing newly procured titles across engineering disciplines.',
      date: '2026-02-10',
      location: 'Ground Floor Atrium',
      image: '',
      status: 'Completed',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: '',
  });

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2600);
  };

  const filteredEvents = useMemo(
    () =>
      events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [events, searchTerm],
  );

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', date: '', location: '', image: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (eventItem) => {
    setEditingId(eventItem.id);
    setFormData({
      title: eventItem.title,
      description: eventItem.description,
      date: eventItem.date,
      location: eventItem.location,
      image: eventItem.image,
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: preview }));
  };

  const handleSaveEvent = () => {
    if (!formData.title || !formData.description || !formData.date) return;

    if (editingId) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId
            ? {
                ...event,
                ...formData,
                status: new Date(formData.date) < new Date() ? 'Completed' : 'Upcoming',
              }
            : event,
        ),
      );
      addToast('Event updated', 'Event details were updated successfully.');
    } else {
      setEvents((prev) => [
        {
          id: `EVT-${Math.floor(100 + Math.random() * 800)}`,
          ...formData,
          status: new Date(formData.date) < new Date() ? 'Completed' : 'Upcoming',
        },
        ...prev,
      ]);
      addToast('Event created', 'New event added and ready for publishing.');
    }

    setIsModalOpen(false);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
    addToast('Event deleted', `${eventId} was removed.`);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Events Management"
        description="Create and manage public-facing events for the main website."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            onClick={openCreateModal}
          >
            <Plus size={16} /> Create Event
          </button>
        }
      />

      <AdminCard>
        <div className="relative mb-4 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search events by title or location"
            className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-accent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md">
              <div className="h-32 bg-slate-100">
                {event.image ? (
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-400">
                    <ImagePlus size={22} />
                  </div>
                )}
              </div>
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-primary">{event.title}</h3>
                  <Badge tone={event.status === 'Upcoming' ? 'warning' : 'success'}>{event.status}</Badge>
                </div>

                <p className="line-clamp-2 text-sm text-slate-600">{event.description}</p>

                <div className="space-y-1 text-sm text-slate-500">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={15} /> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={15} /> {event.location}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-2">
                  <button
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
                    onClick={() => openEditModal(event)}
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-rose-600 hover:bg-rose-50"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </article>
          ))}

          {filteredEvents.length === 0 ? (
            <div className="col-span-full rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
              No events found for the current search term.
            </div>
          ) : null}
        </div>
      </AdminCard>

      <AdminModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingId ? 'Edit Event' : 'Create Event'}
        footer={[
          <button
            key="cancel"
            type="button"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>,
          <button
            key="save"
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light"
            onClick={handleSaveEvent}
          >
            {editingId ? 'Save Changes' : 'Create Event'}
          </button>,
        ]}
      >
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Event title"
            value={formData.title}
            onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Event description"
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="date"
              value={formData.date}
              onChange={(event) => setFormData((prev) => ({ ...prev, date: event.target.value }))}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(event) => setFormData((prev) => ({ ...prev, location: event.target.value }))}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>

          <label className="rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600 hover:bg-slate-50">
            <span className="flex items-center gap-2 font-medium text-primary">
              <ImagePlus size={16} /> Upload event image
            </span>
            <input type="file" accept="image/*" className="mt-3 block w-full text-xs" onChange={handleImageUpload} />
          </label>

          {formData.image ? (
            <img src={formData.image} alt="Preview" className="h-40 w-full rounded-lg object-cover" />
          ) : null}
        </div>
      </AdminModal>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default ManageEvents;
