"Use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/app/assets/user.png";
import NavLink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session } =  authClient.getSession()
  const user = session?.user;
  console.log(user,"user");
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">
          <Link href="/">QurbaniHat</Link>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href={"/Allanimals"}>All Animals</NavLink>
          </li>
          
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Image
            src={user.image || userAvatar}
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />

          <Link href="/login">
            <button className="px-4 py-1.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
              Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;