import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <form className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold underline text-center">
            Sign Up
          </h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 rounded-md p-2"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 rounded-md p-2"
          />
          <button className="bg-black text-white rounded-md p-2">Sign Up</button>
          
        </form>
      </div>
    </div>
  );
}
