import { FloatingBanner } from "@/components/ui/Float-Banner/index";
import { TextDisplay } from "@/components/ui/Text-Display/text-display";
import { HighLighter } from "@/components/ui/highlighter";

export interface ComponentInfo {
  name: string;
  component: React.ComponentType<any>;
  code: string;
  props: Array<{
    name: string;
    type: string;
    description: string;
    code?: boolean;
    faded?: boolean;
  }>;
  category: string;
  description: string;
}

export const componentRegistry: Record<string, ComponentInfo> = {
  'floating-banner': {
    name: 'FloatingBanner',
    component: FloatingBanner,
    code: `"use client";
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
}`,
    props: [
      {
        name: "text",
        type: "string",
        description: "The text to display in the banner",
        code: true,
      }
    ],
    category: "Hero",
    description: "An animated floating banner with text and arrow icon"
  },
  'text-display': {
    name: 'TextDisplay',
    component: TextDisplay,
    code: `"use client";
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
}`,
    props: [
      {
        name: "words",
        type: "string",
        description: "The text to animate word by word",
        code: true,
      }
    ],
    category: "Animation",
    description: "Text animation component with word-by-word reveal effect"
  },
  'high-lighter': {
    name: 'HighLighter',
    component: HighLighter,
    code: `export const HighLighter = ({text}:{text:string}) => {
    return (
        <span className="text-4xl text-white border-l-4 border-green-600 bg-gradient-to-r from-green-800/40 to-none inline-block pl-2">
            {text}
        </span>
    )
}`,
    props: [
      {
        name: "text",
        type: "string",
        description: "The text to highlight with green accent",
        code: true,
      }
    ],
    category: "Typography",
    description: "A text highlighter component with green accent border and gradient background"
  }
};

export const getComponentsByCategory = () => {
  const categories: Record<string, ComponentInfo[]> = {};
  
  Object.values(componentRegistry).forEach(component => {
    if (!categories[component.category]) {
      categories[component.category] = [];
    }
    categories[component.category].push(component);
  });
  
  return categories;
};

export const getAllComponents = () => {
  return Object.values(componentRegistry);
};
