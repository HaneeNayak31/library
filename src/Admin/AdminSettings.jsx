import React, { useState } from 'react';
import { Save } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, ToastStack } from './AdminUI';

const AdminSettings = () => {
 
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
       

       
      </div>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default AdminSettings;
