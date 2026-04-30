import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            🐄 QurbaniHat
          </h2>
          <p className="text-sm leading-6">
            QurbaniHat is a trusted livestock booking platform where you can
            easily find, compare, and book healthy cattle for your Qurbani.
            Safe, reliable, and convenient.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm">✉️ support@qurbanihat.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white transition">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition">
              YouTube
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;