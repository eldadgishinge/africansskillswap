// ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending the data to the server
        console.log(formData);
        // Reset the form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <h1 className="text-3xl font-bold underline text-center">Contact Us</h1>
                    
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />
                    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-400 rounded-md p-2 w-full h-24"
                    />
                    
                    <button type="submit" className="bg-black text-white rounded-md p-2 w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
