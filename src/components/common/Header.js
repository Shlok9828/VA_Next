import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-white shadow-md h-16 flex items-center px-6 z-20">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Daikin Logo" className="h-8" />
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-600">
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-3 w-3 flex items-center justify-center"></span>
            <IoMdNotificationsOutline className="w-8 h-8 text-[#00A0E4]" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="/images/user-profile.png"
            alt="Profile"
            className="h-10 w-10 rounded-full border"
          />
          <span className="text-sm font-medium text-gray-600">User Name</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Use Link directly to handle navigation without <a> tag */}
          <Link href="/login">
            <button className="flex items-center space-x-2 text-sm font-medium text-[#00A0E4] transition duration-200">
              <FiLogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
