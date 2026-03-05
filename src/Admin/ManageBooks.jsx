import React, { useMemo, useState } from 'react';
import { Edit2, Plus, Search, Trash2 } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, Badge, ToastStack } from './AdminUI';

const initialBooks = [
  { id: 'B-1021', title: 'Clean Code', author: 'Robert C. Martin', category: 'Software', status: 'Available' },
  { id: 'B-1064', title: 'Database System Concepts', author: 'Silberschatz', category: 'Database', status: 'Issued' },
  { id: 'B-1142', title: 'Computer Networks', author: 'A. S. Tanenbaum', category: 'Networking', status: 'Available' },
  { id: 'B-1219', title: 'Artificial Intelligence: A Modern Approach', author: 'Russell & Norvig', category: 'AI', status: 'Issued' },
  { id: 'B-1298', title: 'Operating System Concepts', author: 'Galvin', category: 'Systems', status: 'Available' },
  { id: 'B-1324', title: 'Digital Logic Design', author: 'M. Morris Mano', category: 'Electronics', status: 'Available' },
];

const ManageBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [toasts, setToasts] = useState([]);

  const categories = useMemo(() => ['All', ...new Set(books.map((book) => book.category))], [books]);

  const filteredBooks = useMemo(
    () =>
      books.filter((book) => {
        const term = searchTerm.toLowerCase();
        const matchesTerm =
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.id.toLowerCase().includes(term);
        const matchesStatus = statusFilter === 'All' || book.status === statusFilter;
        const matchesCategory = categoryFilter === 'All' || book.category === categoryFilter;
        return matchesTerm && matchesStatus && matchesCategory;
      }),
    [books, categoryFilter, searchTerm, statusFilter],
  );

  const addToast = (title, message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2800);
  };

  const handleDelete = (bookId) => {
    setBooks((prev) => prev.filter((book) => book.id !== bookId));
    addToast('Book removed', `Book ${bookId} was removed from the listing.`);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Books Management"
        description="Manage catalog visibility, availability status, and inventory actions."
        actions={
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
            <Plus size={16} /> Add Book
          </button>
        }
      />

      <AdminCard>
        <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-4">
          <label className="relative lg:col-span-2">
            <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by title, author, or accession ID"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-3 text-sm focus:border-accent focus:outline-none"
            />
          </label>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600 focus:border-accent focus:outline-none"
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Issued">Issued</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600 focus:border-accent focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        <div className="admin-table-scroll rounded-xl border border-slate-200">
          <table className="w-full min-w-190 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Accession ID</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Author</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="transition-colors hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-600">{book.id}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{book.title}</td>
                  <td className="px-4 py-3 text-slate-600">{book.author}</td>
                  <td className="px-4 py-3 text-slate-600">{book.category}</td>
                  <td className="px-4 py-3">
                    <Badge tone={book.status === 'Available' ? 'success' : 'warning'}>{book.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary">
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        onClick={() => handleDelete(book.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-10 text-center text-slate-500">
                    No books match the current search and filter set.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </AdminCard>

      <ToastStack toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
    </div>
  );
};

export default ManageBooks;
