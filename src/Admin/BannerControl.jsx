import React, { useState } from 'react';
import { ImagePlus, Save } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, Badge, ToastStack } from './AdminUI';

const BannerControl = () => {
  const [toasts, setToasts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [banner, setBanner] = useState({
    title: 'Welcome to GTU Central Library',
    description: 'Explore collections, events, and scholarly resources tailored for students and researchers.',
    image: '',
    enabled: true,
  });

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => setToasts((prev) => prev.filter((toast) => toast.id !== id)), 2500);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setBanner((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
  };

  const handleSave = () => {
    setIsSaving(true);
    window.setTimeout(() => {
      setIsSaving(false);
      addToast('Banner saved', 'Homepage hero configuration was updated.');
    }, 900);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Hero / Banner Control"
        description="Manage homepage hero content with instant visual preview."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-70"
            onClick={handleSave}
            disabled={isSaving}
          >
            <Save size={16} /> {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AdminCard title="Banner Settings" subtitle="Update text, media, and visibility">
          <div className="space-y-4">
            <input
              type="text"
              value={banner.title}
              onChange={(event) => setBanner((prev) => ({ ...prev, title: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Hero title"
            />

            <textarea
              rows={4}
              value={banner.description}
              onChange={(event) => setBanner((prev) => ({ ...prev, description: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Hero description"
            />

            <label className="block rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600 hover:bg-slate-50">
              <span className="inline-flex items-center gap-2 font-medium text-primary">
                <ImagePlus size={16} /> Upload hero image
              </span>
              <input type="file" accept="image/*" className="mt-3 block w-full text-xs" onChange={handleImageUpload} />
            </label>

            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <div>
                <p className="text-sm font-semibold text-primary">Enable banner</p>
                <p className="text-xs text-slate-500">Toggle visibility on homepage</p>
              </div>
              <button
                type="button"
                className={`h-6 w-11 rounded-full transition-colors ${banner.enabled ? 'bg-primary' : 'bg-slate-300'}`}
                onClick={() => setBanner((prev) => ({ ...prev, enabled: !prev.enabled }))}
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${banner.enabled ? 'translate-x-5' : 'translate-x-0.5'}`}
                />
              </button>
            </label>
          </div>
        </AdminCard>

        <AdminCard title="Live Preview" subtitle="How banner appears on public homepage">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white">
            <div className="relative h-64">
              {banner.image ? (
                <img src={banner.image} alt="Banner preview" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-linear-to-r from-primary to-primary-light" />
              )}
              <div className="absolute inset-0 bg-primary/45" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge tone={banner.enabled ? 'success' : 'warning'}>{banner.enabled ? 'Active' : 'Disabled'}</Badge>
                <h3 className="mt-3 text-2xl font-bold text-white">{banner.title || 'Hero title'}</h3>
                <p className="mt-2 text-sm text-slate-100">{banner.description || 'Hero description'}</p>
              </div>
            </div>
          </div>
        </AdminCard>
      </div>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default BannerControl;
