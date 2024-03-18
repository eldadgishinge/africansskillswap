import React from 'react';

const Learn = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <input
        type="search"
        name=""
        id="search"
        placeholder="Dropdown of Categories"
        className="w-full bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="card bg-white rounded-md shadow-md p-4 flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0="
            alt="Image 1"
            className="w-full h-48 object-cover rounded-t-md"
          />
          <div className="content flex-grow">
            <h1 className="text-xl font-bold mb-2">Title</h1>
            <h2 className="text-lg font-medium mb-2">Author</h2>
            <span className="text-gray-500 mb-4">University</span>
            <p className="text-base mb-4">Description</p>
            <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
        
  
      </main>
    </div>
  );
};

export default Learn;
