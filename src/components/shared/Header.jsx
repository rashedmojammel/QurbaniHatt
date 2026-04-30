import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold cursor-pointer flex justify-center items-center">
          🐄 QurbaniHat
        </h1>

      </div>
    </header>
  );
};

export default Header;