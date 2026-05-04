'use client';

import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function UpdateAnimalModal() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return (
    <div className="flex justify-center mt-40">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );

  if (!session) redirect('/login');

  return <BookForm />;
}

function BookForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    payment: 'cash',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking submitted successfully!');
    setForm({ name: '', email: '', phone: '', address: '', payment: 'cash' });
  };

  return (
    <div className="max-w-md mx-auto p-6 border-2 rounded-xl mt-16 mb-10">
      <Link href="/Allanimals" className="btn btn-outline btn-sm mb-6">
        ← Back to All Animals
      </Link>
      <h2 className="text-2xl font-bold mb-6">Booking Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="input input-bordered w-full"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (01XXXXXXXXX)"
          required
          className="input input-bordered w-full"
        />
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Delivery Address"
          required
          className="textarea textarea-bordered w-full"
        />
        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="cash">Cash on Delivery</option>
          <option value="mobile">Mobile Banking (bKash / Nagad)</option>
          <option value="card">Card Payment</option>
        </select>

        <div className="flex gap-3">
          <button type="submit" className="btn btn-primary flex-1">
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={() => setForm({ name: '', email: '', phone: '', address: '', payment: 'cash' })}
            className="btn btn-outline flex-1"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}