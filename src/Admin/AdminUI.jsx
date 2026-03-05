import React from 'react';
import { X } from 'lucide-react';

export const AdminPageHeader = ({ title, description, actions }) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h2 className="text-2xl font-bold text-primary font-serif">{title}</h2>
      {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
    </div>
    {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
  </div>
);

export const AdminCard = ({ title, subtitle, action, children, className = '' }) => (
  <section className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
    {(title || action) ? (
      <header className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
        <div>
          {title ? <h3 className="text-base font-bold text-primary">{title}</h3> : null}
          {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </header>
    ) : null}
    <div className="px-5 py-4 sm:px-6">{children}</div>
  </section>
);

export const StatCard = ({ label, value, icon: Icon, hint }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="mt-2 text-2xl font-bold text-primary">{value}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-primary">
        <Icon size={20} />
      </div>
    </div>
    {hint ? <p className="mt-3 text-xs text-slate-500">{hint}</p> : null}
  </div>
);

export const Badge = ({ tone = 'neutral', children }) => {
  const toneMap = {
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-700',
    info: 'bg-blue-100 text-blue-700',
    neutral: 'bg-slate-100 text-slate-700',
    purple: 'bg-purple-100 text-purple-700',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${toneMap[tone] || toneMap.neutral}`}>
      {children}
    </span>
  );
};

export const AdminModal = ({ open, title, onClose, children, footer }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl animate-[fadeIn_200ms_ease-out]">
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <h3 className="text-lg font-bold text-primary">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </header>
        <div className="admin-modal-scroll max-h-[70vh] px-5 py-4 sm:px-6">{children}</div>
        {footer ? <footer className="flex flex-wrap justify-end gap-2 border-t border-slate-100 px-5 py-4 sm:px-6">{footer}</footer> : null}
      </div>
    </div>
  );
};

export const ToastStack = ({ toasts, onClose }) => (
  <div className="pointer-events-none fixed right-4 top-20 z-70 flex w-[min(22rem,90vw)] flex-col gap-2">
    {toasts.map((toast) => (
      <div
        key={toast.id}
        className="pointer-events-auto rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-lg animate-[slideIn_220ms_ease-out]"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-primary">{toast.title}</p>
            {toast.message ? <p className="mt-1 text-slate-500">{toast.message}</p> : null}
          </div>
          <button
            type="button"
            className="text-slate-400 transition-colors hover:text-slate-600"
            onClick={() => onClose(toast.id)}
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const TinyLineChart = ({ points = [] }) => {
  const path = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${index * 28} ${120 - point}`)
    .join(' ');

  return (
    <svg viewBox="0 0 200 120" className="h-32 w-full text-primary">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`${path} L 196 120 L 0 120 Z`} fill="currentColor" opacity="0.1" />
    </svg>
  );
};

export const TinyBarChart = ({ values = [] }) => (
  <div className="flex h-36 items-end gap-2">
    {values.map((value, index) => (
      <div key={index} className="flex flex-1 flex-col items-center gap-2">
        <div
          className="w-full rounded-t-md bg-primary/85 transition-all duration-300 hover:bg-primary"
          style={{ height: `${Math.max(value, 8)}%` }}
        />
      </div>
    ))}
  </div>
);
