import React from "react";
import image from "./image.png";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="block items-center justify-center mt-20 min-h-screen bg-white py-6">
            <motion.div
                className="flex italic justify-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col mx-20 space-y-6 space-x-2">
                    <h1 className="text-xl font-bold underline">__AfricansSkillSwap</h1>
                    <p className="text-3xl">Welcome to AfricansSkillSwap, a vibrant platform uniting African students across the globe! Here, students from diverse backgrounds come together to exchange knowledge, experiences, and opportunities.</p>
                </div>
                <motion.div
                    className="flex flex-col space-y-6 mx-20 space-x-2"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <img src={image} alt="image" style={{ width: '2000px', height: '400px' }} />
                </motion.div>
            </motion.div>
           
          
           
            <motion.div
                className="flex flex-col mx-20 space-y-6 space-x-2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className=" justify-center text-2xl">Our mission is to create a platform where African students can connect, share knowledge, and grow together. We believe that by sharing our experiences and skills, we can help each other succeed and make a positive impact on the world.</p>
            </motion.div>
        </div>
    );
}