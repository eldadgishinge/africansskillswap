// ContactUs.js
import React, { useState } from 'react';
import supabase from "../config/supabaseClient"

const ContactUs = () => {
    
    const [Messages, setMessages] = useState('')
    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Message, setMessage] = useState('')
    const [formError, setFormError] = useState(null)



    const handleSubmit = async(e) => {
        e.preventDefault()
       if (!Name || !Email || !Message) {
              setFormError("All fields are required");
              return;
         }
         console.log(Name, Email, Message)
         const {data, error} = await supabase
            .from('Messages')
            .insert ([{
                Name,
                Email,
                Message
            }])
            if (error) {
                setFormError(error.message)
            }else if (data) {
                setFormError(null)
                setMessages(data)
                setEmail('')
                setName('')
                setMessage('')
            }
        }
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
                        value={Name}
                        onChange={e => setName(e.target.value)}
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />
                    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={Message}
                        onChange={e => setMessage(e.target.value)}
                        className="border border-gray-400 rounded-md p-2 w-full h-24"
                    />
                    
                    <button type="submit" className="bg-black text-white rounded-md p-2 w-full">Submit</button>
                    {formError && <p className="text-red-500">{formError}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
