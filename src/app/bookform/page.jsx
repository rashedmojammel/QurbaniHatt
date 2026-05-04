'use client';

import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Select,
  SelectItem,
} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function BookingForm() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="flex justify-center mt-40"><span className="loading loading-dots loading-lg"></span></div>;
  if (!session) redirect('/login');

  return <BookForm />;
}

function BookForm() {
  const [payment, setPayment] = useState('cash');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking submitted successfully!');
    e.target.reset();
    setPayment('cash');
  };

  return (
    <div className="max-w-md mx-auto p-6 border-2 rounded-xl mt-16 mb-10">
      <Link href="/Allanimals" className="btn btn-outline btn-sm mb-6">
        ← Back to All Animals
      </Link>
      <h2 className="text-2xl font-bold mb-6">Booking Form</h2>

      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <TextField isRequired name="name" type="text" className="w-full">
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" className="input input-bordered w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          className="w-full"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className="input input-bordered w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="phone"
          type="tel"
          className="w-full"
          validate={(value) => {
            if (!/^(?:\+88)?01[3-9]\d{8}$/.test(value)) {
              return "Please enter a valid Bangladeshi phone number";
            }
            return null;
          }}
        >
          <Label>Phone Number</Label>
          <Input placeholder="01XXXXXXXXX" className="input input-bordered w-full" />
          <Description className="text-xs text-gray-400">Bangladeshi number e.g. 01712345678</Description>
          <FieldError />
        </TextField>

        <TextField isRequired name="address" className="w-full">
          <Label>Delivery Address</Label>
          <Input placeholder="Enter your full address" className="input input-bordered w-full" />
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-medium">Payment Method</label>
          <select
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="cash">Cash on Delivery</option>
            <option value="mobile">Mobile Banking (bKash / Nagad)</option>
            <option value="card">Card Payment</option>
          </select>
        </div>

        <div className="flex gap-3 mt-2">
          <Button type="submit" className="btn btn-primary flex-1">
            Confirm Booking
          </Button>
          <Button
            type="reset"
            onPress={() => setPayment('cash')}
            className="btn btn-outline flex-1"
          >
            Reset
          </Button>
        </div>

      </Form>
    </div>
  );
}