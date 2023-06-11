
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 lg:flex-row header-section">
      <div className="text-4xl font-black cursor-pointer lg:text-2xl">Travelor</div>
      <div className="flex items-center gap-6">
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">Pricing</div>
        <div className="cursor-pointer">Contact</div>
      </div>
      <div className="flex items-center gap-6">
        <div className="font-semibold cursor-pointer ">Log in</div>
        <div className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-full cursor-pointer ">Sign up</div>
      </div>
    </div>
  );
}

export default Header;
