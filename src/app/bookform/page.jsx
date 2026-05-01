'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SimpleForm() {
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

    console.log(form);

    toast.success('Submitted Successfully! ✅');

    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      payment: 'cash',
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Simple Booking Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="input input-bordered w-full" />

        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="input input-bordered w-full" />

        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="input input-bordered w-full" />

        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" required className="textarea textarea-bordered w-full" />

        <select name="payment" value={form.payment} onChange={handleChange} className="select select-bordered w-full">
          <option value="cash">Cash</option>
          <option value="mobile">Mobile Banking</option>
          <option value="card">Card</option>
        </select>

        <button className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
}