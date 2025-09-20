import React from 'react'
import { DemoBlock } from './demoblock'
import { FloatingBanner } from './ui/Float-Banner/float-banner'
import { Addcode } from './addcode'

export const MainContent = () => {
  return (
    <>
        <h1 className='text-4xl font-semibold tracking-tighter'>{}</h1>
        <div className='border border-neutral-800 mt-3 p-1 flex w-fit gap-2 rounded-xl font-semibold text-md'>
            <button className='bg-blue-950/40 rounded-md px-3 py-2'>Preview</button>
            <button>Example</button>
        </div>
        <DemoBlock>
            <FloatingBanner text='Welcome to my OF'/>
        </DemoBlock>
        <div className='mt-5 mx-auto flex gap-5 flex-col'>
            <Addcode/>
        </div>
    </>
  )
}
