import { cn } from '@/lib/utils'
import React from 'react'
import { CodeBlock } from './codeblock'
import { Addcode } from './addcode';
import { FloatingBanner } from './ui/Float-Banner/float-banner';
import { DemoBlock } from './demoblock';
import { Sidebar } from './sidebar';
import { MainContent } from './main-content';


export const Container = ({className}:{className?: string}) => {
  return (
    <div className={cn('bg-neutral-950 min-h-screen mx-auto flex',className)}>
        <div className='min-w-3xs p-3'>
            <Sidebar/>
        </div>
        <div className='p-3 flex-1 text-white flex flex-col custom-scrollbar overflow-y-scroll max-h-screen mask-b-from-[80%]'>
            <MainContent/>
        </div>
    </div>
  )
}
