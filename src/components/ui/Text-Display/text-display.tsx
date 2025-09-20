/**
 * @component TextDisplay
 * @category Animation
 * @description Text animation component with word-by-word reveal effect using blur and opacity transitions
 * @prop words string The text to animate word by word
 */
"use client";
import { motion } from "motion/react";

export const TextDisplay = ({words} : {words:string}) => {
    const wordsArr = words.split(' ');
    return (
        <span className="text-white text-4xl font-semibold tracking-tight">
            {wordsArr.map((word,idx)=>(
                <motion.span
                    initial={{
                        filter: 'blur(10px)',
                        opacity: 0
                    }} 
                    animate={{
                        filter: 'blur(0px)',
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.3 * idx
                    }}
                    key={idx}>
                    {word + ' '}
                </motion.span>
            ))}
        </span>
    )
}