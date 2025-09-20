import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";


export const Sidebar = async () => {
    const dir = process.cwd() + '/src/components/ui'
  return (
    <div className='p-2 border border-neutral-800 text-white h-full rounded-xl'>
        <h2 className='text-4xl tracking-[-3px] font-jetbrain font-semibold flex items-center gap-2'>Quanta <FaCodeCompare/></h2>
        <div className='flex flex-col text-xl px-2 mt-5'>
            hello
        </div>
    </div>
  )
}
