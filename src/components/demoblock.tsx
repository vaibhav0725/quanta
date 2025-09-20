import React, { ReactNode } from 'react'
import { FloatingBanner } from './ui/Float-Banner/float-banner'

export const DemoBlock = ({children}:{children :ReactNode}) => {
  return (
    <div className='border border-neutral-800 mt-5 min-h-[35rem] rounded-xl flex items-center justify-center'>
        {children}
    </div>
  )
}
