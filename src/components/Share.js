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
    const [Author, setAuthor] = useState('')
    const [University, setUniversity] = useState('')
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Thumbnail, setThumbnail] = useState('')
    const [Link, setLink] = useState('')
    const [category_id, setcategory_id] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
       //e.preventDefault()
        if (!Author || !University || !Title || !Description || !Thumbnail || !Link || !category_id) {
            setFormError('Please fill in all fields')
            e.preventDefault()
            return
        }
        console.log({ Author, University, Title, Description, Thumbnail, Link, category_id })
        const { data, error } = await supabase
            .from('skills')
            .insert([
                {
                    Author,
                    University,
                    Title,
                    Description,
                    Thumbnail,
                    category_id,
                    Link
                    
                }
            ])
        if (error) {
            setFormError(error.message)
        }
        if (data) {
            console.log(data)
            setFormError(null)
            setAuthor('')
            setUniversity('')
            setTitle('')
            setDescription('')
            setThumbnail('')
            setLink('')
            setcategory_id('')
           // window.location.href = '/'
        }
    }


    const arr_id = []
   
 for (let i = 0; i < categories.length; i++) {
        //console.log(categories[i].id)
        arr_id.push(categories[i].id)
    }

    console.log(arr_id)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <h1 className="text-3xl font-bold underline text-center">
                        Share
                    </h1>

                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={category_id}
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setcategory_id(e.target.value)}
                    >
                        {/* Map through the categories array to generate options */}
                        {categories.map((category) => (
                            <option key={category.id} 
                        
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
                        value={Author}
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <label htmlFor="University">University</label>
                    <input
                        type="text"
                        id="University" 
                        value={University}
                        name="University"
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setUniversity(e.target.value)}
                    />

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={Title}
                        name="title"
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={Description}
                        name="description"
                        className="border border-gray-400 rounded-md p-2 w-full h-24"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input
                        type="text"
                        id="thumbnail"
                        value={Thumbnail}
                        name="thumbnail"
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setThumbnail(e.target.value)}
                    />
                    <label htmlFor="Link">Link to learn more</label>
                    <input
                        type="text"
                        id="Link"
                        value={Link}
                        name="Link"
                        className="border border-gray-400 rounded-md p-2 w-full"
                        onChange={(e) => setLink(e.target.value)}
                    />

                    <button className="bg-black text-white rounded-md p-2 w-full">Share</button>
                    {formError && <p className="text-red-500">{formError}</p>}
                </form>
            </div>
        </div>
    );
}
