"use client";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "motion/react"


export const FloatingBanner = ({text}:{text:string}) => {
    return (
        <motion.div
            animate={{ y: [50,-50,50] }}
            transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
            }}
            className="flex gap-3 relative">
            <h2 className="bg-sky-500 text-black font-semibold tracking-tighter text-5xl rounded-full px-5 py-2.5">
                {text}
            </h2>
            <div>
                <FaLocationArrow className="fill-sky-500 text-5xl absolute bottom-20"/>
            </div>
        </motion.div>
    )
}