import React, { useState } from 'react';
import { Plus, Shield, Trash2 } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, Badge, ToastStack } from './AdminUI';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    { id: 'A-101', name: 'Admin User', email: 'admin@gtu.edu.in', role: 'Super Admin', status: 'Active' },
    { id: 'A-102', name: 'Librarian Desk', email: 'librarian@gtu.edu.in', role: 'Content Admin', status: 'Active' },
    { id: 'A-103', name: 'Events Operator', email: 'events@gtu.edu.in', role: 'Event Admin', status: 'Inactive' },
  ]);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Content Admin' });

  const activity = [
    { id: 1, event: 'Logged in from GTU network', by: 'Admin User', time: '08:10 AM' },
    { id: 2, event: 'Published homepage banner update', by: 'Librarian Desk', time: '09:54 AM' },
    { id: 3, event: 'Deleted old event draft', by: 'Events Operator', time: '11:40 AM' },
  ];

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => setToasts((prev) => prev.filter((toast) => toast.id !== id)), 2600);
  };

  const handleAddAdmin = () => {
    if (!formData.name || !formData.email) return;
    const newAdmin = {
      id: `A-${Math.floor(200 + Math.random() * 700)}`,
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: 'Active',
    };

    setAdmins((prev) => [newAdmin, ...prev]);
    setFormData({ name: '', email: '', role: 'Content Admin' });
    addToast('Admin added', `${newAdmin.name} has been granted access.`);
  };

  const removeAdmin = (adminId) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== adminId));
    addToast('Admin removed', `${adminId} has been removed.`);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Admin Management"
        description="Manage admin users and monitor privileged actions."
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <AdminCard className="xl:col-span-2" title="Administrators" subtitle="Current users with admin access">
          <div className="admin-table-scroll rounded-xl border border-slate-200">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-primary">{admin.name}</td>
                    <td className="px-4 py-3 text-slate-600">{admin.email}</td>
                    <td className="px-4 py-3">
                      <Badge tone="info">{admin.role}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge tone={admin.status === 'Active' ? 'success' : 'neutral'}>{admin.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        onClick={() => removeAdmin(admin.id)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        <AdminCard title="Add New Admin" subtitle="Assign role and grant dashboard access">
          <div className="space-y-3">
            <input
              type="text"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="Email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <select
              value={formData.role}
              onChange={(event) => setFormData((prev) => ({ ...prev, role: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            >
              <option>Super Admin</option>
              <option>Content Admin</option>
              <option>Event Admin</option>
            </select>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light"
              onClick={handleAddAdmin}
            >
              <Plus size={15} /> Add Admin
            </button>
          </div>
        </AdminCard>
      </div>

      <AdminCard title="Admin Activity Monitor" subtitle="Recent privileged actions">
        <ul className="space-y-3">
          {activity.map((log) => (
            <li key={log.id} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Shield size={15} className="text-primary" />
                <span>
                  <span className="font-semibold text-primary">{log.by}</span> {log.event}
                </span>
              </div>
              <span className="text-xs text-slate-500">{log.time}</span>
            </li>
          ))}
        </ul>
      </AdminCard>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default AdminManagement;
