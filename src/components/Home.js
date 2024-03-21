import React from "react";
import image from "./image.png"

export default function Home() {
    return (
        <>
        <div className="block items-center justify-center mt-20  min-h-screen bg-white py-6">
           
                <div className="flex italic justify-content"> 
                    <div className="flex flex-col mx-20 space-y-6 space-x-2">
                        <h1 className="text-3xl font-bold underline ">AfricansSkillSwap</h1>
                        <p>Welcome to AfricansSkillSwap, a vibrant platform uniting African students across the globe! Here, students from diverse backgrounds come together to exchange knowledge, experiences, and opportunities.</p>
                    </div>
                    <div className="flex flex-col space-y-6 mx-20 space-x-2"><img  src={image} alt ="image"/></div>
                    
                </div> 
                <br></br>
                <br></br>
                <br></br>
                <div className="flex flex-col mx-20 space-y-6 space-x-2">
                    
                    <p>Our mission is to create a platform where African students can connect, share knowledge, and grow together. We believe that by sharing our experiences and skills, we can help each other succeed and make a positive impact on the world.</p>
                </div>
                
            
        </div>
        </>
        
    );
}