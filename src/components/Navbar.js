import React, { useState } from 'react';
import { GoogleLogout } from "react-google-login";

const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onLogoutSuccess = (response) => {
    console.log(response);
};

  return (
    <nav className="bg-gray-800 flex justify-between items-center h-16 px-4">
      <div className="text-xl font-bold text-white px-4 md:px-0 rounded"><a href='/'>AfricaSkillSwap</a></div>
      <div className="md:hidden">
        <button
          className="text-white bl hover:text-gray-200 px-3 py-2 rounded-md"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul className={`flex space-x-4 text-white md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <a href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Home
          </a>
        </li>
        <li>
          <a href="/learn" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Learn
          </a>
        </li>
        <li>
          <a href="/share" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Share
          </a>
        </li> 
        <li>
          <a href="/contactus" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="/signin"
            className="inline-flex items-center px-4 md:px-6 rounded-md text-white hover:text-gray-200"
          >
            <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;