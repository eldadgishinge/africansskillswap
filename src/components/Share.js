import React from "react";
import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react";


export default function Share() {
    const [fetchError, setFetchError] = useState(null)
    const [categories, setcategories] = useState([])

    useEffect(() => {
        const fetchcategories = async () => {
            const { data, error } = await supabase
                .from('Categories')
                .select()

            if (error) {
                setFetchError(error)
                console.log(error)
            } if (data) {
                setcategories(data)
                setFetchError(null)
            }
        }
        fetchcategories()
    }, []);

    console.log({ categories });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <form className="flex flex-col space-y-6">
                    <h1 className="text-3xl font-bold underline text-center">
                        Share
                    </h1>

                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    >
                        {/* Map through the categories array to generate options */}
                        {categories.map((category) => (
                            <option key={category.id} 
                            onChange={}
                            value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />

                    <label htmlFor="University">University</label>
                    <input
                        type="text"
                        id="University" 
                        name="University"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="border border-gray-400 rounded-md p-2 w-full h-24"
                    />

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />
                    <label htmlFor="Link">Link to learn more</label>
                    <input
                        type="text"
                        id="Link"
                        name="Link"
                        className="border border-gray-400 rounded-md p-2 w-full"
                    />

                    <button className="bg-black text-white rounded-md p-2 w-full">Share</button>
                </form>
            </div>
        </div>
    );
}
