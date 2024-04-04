import React, { useEffect, useState } from 'react';
import supabase from "../config/supabaseClient";

const Learn = () => {
  const [fetchError, setFetchError] = useState(null);
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category_id, setCategoryId] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from('skills').select();
      if (error) {
        setFetchError(error);
        console.log(error);
      } else if (data) {
        setSkills(data);
        setFetchError(null);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from('Categories').select();
      if (error) {
        setFetchError(error);
        console.log(error);
      } else if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  
  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const filteredSkills = category_id
    ? skills.filter((skill) => skill.category_id === category_id)
    : skills;

  return (
    <div className="container mx-auto px-4 py-10">
      <select
        name="category"
        id="category"
        className="w-full bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {filteredSkills.map((skill) => {
          // Find the category name associated with the skill's category_id
          const categoryName = categories.find(cat => cat.id === skill.category_id)?.name || 'Unknown Category';
          return (
            <div key={skill.id} className="card bg-amber-100  rounded-md shadow-md p-4 flex flex-col items-center">
              <img src={skill.Thumbnail} alt="Image 1" className="w-full h-48 object-cover rounded-t-md" />
              <div className="content flex-grow">
                <h1 className="text-xl font-bold mb-2">{skill.Title}</h1>
                <span className="text-gray-500 mb-4">{categoryName}</span>
                <h2 className="text-lg font-medium mb-2">{skill.Author}</h2>
                <span className="text-gray-500 mb-4">{skill.University}</span>
                <p className="text-base mb-4">{skill.Description}</p>
                <a href={skill.Link} target="_blank">
                  <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 focus:outline-none">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Learn;
