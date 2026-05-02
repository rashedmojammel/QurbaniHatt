"use client"
import { UpdateUserModal } from '@/components/shared/BookForm';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const Profilepage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-xl p-6 flex flex-col items-center gap-2">
        
        {user?.image && (
            
          <Image
            src={user.image}
            alt="User avatar"
            width={80}
            height={80}
            className="rounded-full border"
          />
        )}

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted-foreground">{user?.email}</p>

        <UpdateUserModal />
      </div>
    </div>
  );
};

export default Profilepage;