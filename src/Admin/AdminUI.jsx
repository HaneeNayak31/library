import React from "react";
import { X, TrendingUp, TrendingDown } from "lucide-react";

/* PAGE HEADER */

export const AdminPageHeader = ({ title, description, actions }) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold tracking-tight text-primary">
        {title}
      </h2>

      {description && (
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>

    {actions && (
      <div className="flex flex-wrap items-center gap-2">{actions}</div>
    )}
  </div>
);


/* ADMIN CARD */

export const AdminCard = ({
  title,
  subtitle,
  action,
  children,
  className = "",
}) => (
  <section
    className={`rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md ${className}`}
  >
    {(title || action) && (
      <header className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          {title && (
            <h3 className="text-base font-semibold text-primary">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          )}
        </div>

        {action && <div className="flex items-center">{action}</div>}
      </header>
    )}

    <div className="px-6 py-5">{children}</div>
  </section>
);


/* STAT CARD */

export const StatCard = ({
  label,
  value,
  icon: Icon,
  hint,
  trend,
}) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>

        <p className="mt-1 text-2xl font-bold text-primary">{value}</p>

        {trend && (
          <div className="mt-2 flex items-center gap-1 text-xs font-medium">
            {trend > 0 ? (
              <>
                <TrendingUp size={14} className="text-emerald-600" />
                <span className="text-emerald-600">+{trend}%</span>
              </>
            ) : (
              <>
                <TrendingDown size={14} className="text-rose-600" />
                <span className="text-rose-600">{trend}%</span>
              </>
            )}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-primary group-hover:bg-primary group-hover:text-white transition">
        <Icon size={20} />
      </div>
    </div>

    {hint && (
      <p className="mt-3 text-xs text-slate-500">{hint}</p>
    )}
  </div>
);


/* BADGE */

export const Badge = ({ tone = "neutral", children }) => {
  const toneMap = {
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-rose-100 text-rose-700",
    info: "bg-blue-100 text-blue-700",
    neutral: "bg-slate-100 text-slate-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${toneMap[tone]}`}
    >
      {children}
    </span>
  );
};


/* MODAL */

export const AdminModal = ({
  open,
  title,
  onClose,
  children,
  footer,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm animate-fadeIn">

      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl">

        <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">

          <h3 className="text-lg font-semibold text-primary">
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-primary"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

        </header>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {children}
        </div>

        {footer && (
          <footer className="flex flex-wrap justify-end gap-2 border-t border-slate-100 px-6 py-4">
            {footer}
          </footer>
        )}
      </div>

    </div>
  );
};


/* TOASTS */

export const ToastStack = ({ toasts, onClose }) => (
  <div className="pointer-events-none fixed right-4 top-20 z-50 flex w-[min(22rem,90vw)] flex-col gap-2">
    {toasts.map((toast) => (
      <div
        key={toast.id}
        className="pointer-events-auto rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-lg animate-slideIn"
      >
        <div className="flex items-start justify-between gap-3">

          <div>
            <p className="font-semibold text-primary">
              {toast.title}
            </p>

            {toast.message && (
              <p className="mt-1 text-slate-500">
                {toast.message}
              </p>
            )}
          </div>

          <button
            type="button"
            className="text-slate-400 hover:text-slate-600"
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


/* TINY LINE CHART */

export const TinyLineChart = ({ points = [] }) => {

  const path = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${index * 28} ${120 - point}`
    )
    .join(" ");

  return (
    <svg viewBox="0 0 200 120" className="h-32 w-full text-primary">
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d={`${path} L 196 120 L 0 120 Z`}
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  );
};


/* TINY BAR CHART */

export const TinyBarChart = ({ values = [] }) => (
  <div className="flex h-36 items-end gap-2">
    {values.map((value, index) => (
      <div
        key={index}
        className="flex flex-1 flex-col items-center"
      >
        <div
          className="w-full rounded-t-md bg-primary/80 transition-all duration-300 hover:bg-primary"
          style={{ height: `${Math.max(value, 8)}%` }}
        />
      </div>
    ))}
  </div>
);