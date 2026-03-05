import React, { useState } from 'react';
import { Save } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, ToastStack } from './AdminUI';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    maintenanceMode: false,
    showDraftWarnings: true,
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD/MM/YYYY',
  });
  const [saving, setSaving] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => setToasts((prev) => prev.filter((toast) => toast.id !== id)), 2500);
  };

  const saveSettings = () => {
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      addToast('Settings updated', 'Dashboard preferences were saved successfully.');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Settings"
        description="Configure dashboard behavior and admin preferences."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-70"
            onClick={saveSettings}
            disabled={saving}
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save Settings'}
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AdminCard title="Notifications" subtitle="Communication and update alerts">
          <div className="space-y-3">
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span className="text-sm text-slate-700">Email alerts for new events and notices</span>
              <input
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={(event) => setSettings((prev) => ({ ...prev, emailAlerts: event.target.checked }))}
              />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span className="text-sm text-slate-700">Show draft warnings before publishing</span>
              <input
                type="checkbox"
                checked={settings.showDraftWarnings}
                onChange={(event) => setSettings((prev) => ({ ...prev, showDraftWarnings: event.target.checked }))}
              />
            </label>
          </div>
        </AdminCard>

        <AdminCard title="System Control" subtitle="Environment and interface behavior">
          <div className="space-y-3">
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span className="text-sm text-slate-700">Maintenance mode</span>
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(event) => setSettings((prev) => ({ ...prev, maintenanceMode: event.target.checked }))}
              />
            </label>

            <div className="rounded-lg border border-slate-200 p-3">
              <p className="mb-2 text-sm text-slate-700">Timezone</p>
              <select
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                value={settings.timezone}
                onChange={(event) => setSettings((prev) => ({ ...prev, timezone: event.target.value }))}
              >
                <option value="Asia/Kolkata">Asia/Kolkata</option>
                <option value="UTC">UTC</option>
              </select>
            </div>

            <div className="rounded-lg border border-slate-200 p-3">
              <p className="mb-2 text-sm text-slate-700">Date format</p>
              <select
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                value={settings.dateFormat}
                onChange={(event) => setSettings((prev) => ({ ...prev, dateFormat: event.target.value }))}
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </AdminCard>
      </div>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default AdminSettings;
