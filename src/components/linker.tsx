import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import {AnimatePresence, motion} from "motion/react"
import Link from 'next/link'

export const Linker = () => {
  const [active,setActive] = useState<null | string>(null)
  return (
    <div className='text-4xl grid grid-cols-2 gap-2 grid-rows-2'>
        <div className='text-center font-bold size-20 shadow-md relative'>
          <AnimatePresence>
          {active && <motion.span
            layoutId='activelink'
            initial={{
              y: 20,
              filter: "blur(10px)"
            }}
            animate={{
              y: 0,
              filter: "blur(0px)"
            }}
            exit={{
              y:20,
              filter: "blur(10px)"
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className='bg-white font-jetbrain text-black text-[20px] inset-x-0 -top-7 rounded-md p-0.5 absolute w-fit'>{active}</motion.span>}
            </AnimatePresence>
          <span>LIN<br/>KS.</span>
        </div>
        <Link href={'https://github.com/vaibhav0725'}>
        <div
          onMouseEnter={() => setActive("github")}
          onMouseLeave={() => setActive(null)}
          className={`border border-neutral-800 shadow-pink-950 rounded-xl flex items-center justify-center size-20 shadow-md`}
        >
          <FaGithub />
        </div>
        </Link>
        <Link href={'https://x.com/quantumVaibhav'}>
        <div
          onMouseEnter={() => setActive("twitter")}
          onMouseLeave={() => setActive(null)}
          className='border border-neutral-800 shadow-md shadow-pink-950 rounded-xl flex items-center justify-center size-20'
        >
          <FaXTwitter />
        </div>
        </Link>
        <Link href={'https://www.linkedin.com/in/vm07/'}>
        <div
          onMouseEnter={() => setActive("linkedin")}
          onMouseLeave={() => setActive(null)}
          className='border border-neutral-800 shadow-md shadow-blue-950 flex rounded-xl items-center justify-center size-20'
        >
          <FaLinkedin />
        </div>
        </Link>
    </div>
  )
}
