"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import userAvatar from "@/app/assets/user.png";
import NavLink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        
        <Link href="/" className="text-3xl font-bold text-purple-600 tracking-tight">
          Qurbani<span className="text-3xl font-bold text-green-500">Hat</span>
        </Link>

        
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/Allanimals">All Animals</NavLink>
          </li>
          <li>
            <NavLink href="/Profile">Profile</NavLink>
          </li>
        </ul>

    
        <div className="flex items-center gap-4">

          
          {isPending && <span className="text-sm text-gray-500">Loading...</span>}

          {/* Logged In */}
          {!isPending && user && (
            <div className="flex items-center gap-3">

              
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-sm font-medium">Hello,</span>
                <span className="text-xs text-gray-500">{user.name}</span>
              </div>

              {/* Avatar */}
              <Link href="/Profile">
                <Image
                  src={user?.image || userAvatar}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-purple-500 hover:scale-105 transition"
                />
              </Link>

              {/* Logout */}
              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/");
                }}
                className="hidden sm:block px-4 py-1.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              >
                Logout
              </button>
            </div>
          )}

         
          {!isPending && !user && (
            <Link href="/login">
              <button className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition shadow">
                Login
              </button>
            </Link>
          )}

        
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t">
          <NavLink href="/">Home</NavLink>
          <div>
             <NavLink href="/Allanimals">All Animals</NavLink>

          </div>
         

          {user && (
            <button
              onClick={async () => {
                await authClient.signOut();
                router.push("/");
              }}
              className="w-full text-left text-red-500"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;