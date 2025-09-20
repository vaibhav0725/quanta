import React, { ReactNode } from 'react'
import { TextDisplay } from './text-display'



export const DemoBlock = ({children}:{children :ReactNode}) => {
  return (
    <div className='border border-neutral-800 mt-5 min-h-[35rem] rounded-xl flex items-center justify-center'>
        <TextDisplay words='Embrace the journey and shine every day' />
    </div>
  )
}
