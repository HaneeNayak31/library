import React, { useMemo, useState } from 'react';
import { Megaphone, Plus, Trash2 } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminModal, AdminPageHeader, Badge, ToastStack } from './AdminUI';

const ManageNotices = () => {
  const [notices, setNotices] = useState([
    {
      id: 'N-001',
      title: 'Library Timings Updated During Exams',
      description: 'The library will remain open from 8:00 AM to 11:00 PM for exam week.',
      priority: 'High',
      date: '2026-03-06',
    },
    {
      id: 'N-002',
      title: 'Digital Library Access Maintenance',
      description: 'E-resource gateway may be unavailable from 2 AM to 4 AM on Sunday.',
      priority: 'Medium',
      date: '2026-03-08',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', priority: 'Medium', date: '' });

  const sortedNotices = useMemo(
    () => [...notices].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [notices],
  );

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2500);
  };

  const handlePublishNotice = () => {
    if (!formData.title || !formData.description || !formData.date) return;
    const newNotice = {
      id: `N-${Math.floor(100 + Math.random() * 900)}`,
      ...formData,
    };

    setNotices((prev) => [newNotice, ...prev]);
    setFormData({ title: '', description: '', priority: 'Medium', date: '' });
    setIsModalOpen(false);
    addToast('Notice published', 'Notice is ready for the public notice board.');
  };

  const handleDeleteNotice = (noticeId) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== noticeId));
    addToast('Notice deleted', `${noticeId} was removed from the board.`);
  };

  const getPriorityTone = (priority) => {
    if (priority === 'High') return 'danger';
    if (priority === 'Medium') return 'warning';
    return 'info';
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Notice & Announcement"
        description="Publish notice board updates for the main website."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} /> Create Notice
          </button>
        }
      />

      <AdminCard>
        <div className="space-y-3">
          {sortedNotices.map((notice) => (
            <article key={notice.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Megaphone size={15} className="text-primary" />
                    <h3 className="text-base font-bold text-primary">{notice.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{notice.description}</p>
                  <p className="mt-2 text-xs text-slate-500">Published on {new Date(notice.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone={getPriorityTone(notice.priority)}>{notice.priority} Priority</Badge>
                  <button
                    className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    onClick={() => handleDeleteNotice(notice.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}

          {sortedNotices.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No notices published yet.
            </p>
          ) : null}
        </div>
      </AdminCard>

      <AdminModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create Notice"
        footer={[
          <button
            key="cancel"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>,
          <button
            key="publish"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light"
            onClick={handlePublishNotice}
          >
            Publish Notice
          </button>,
        ]}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            value={formData.title}
            onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
          />
          <textarea
            rows={4}
            placeholder="Description"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <select
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              value={formData.priority}
              onChange={(event) => setFormData((prev) => ({ ...prev, priority: event.target.value }))}
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            <input
              type="date"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              value={formData.date}
              onChange={(event) => setFormData((prev) => ({ ...prev, date: event.target.value }))}
            />
          </div>
        </div>
      </AdminModal>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default ManageNotices;
