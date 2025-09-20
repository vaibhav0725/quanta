"use client";
import { cn } from '@/lib/utils'
import React, { Suspense } from 'react'
import { Sidebar } from './sidebar';
import { MainContent } from './main-content';
import { useSearchParams } from 'next/navigation'

export const Container = ({className}:
  {
    className?: string,
    
  }
) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('component');
  return (
    <div className={cn('bg-neutral-950 min-h-screen mx-auto flex',className)}>
        <div className='min-w-3xs p-3'>
            <Sidebar/>
        </div>
        <div className='p-3 flex-1 text-white flex flex-col custom-scrollbar overflow-y-scroll max-h-screen mask-b-from-[80%]'>
            <Suspense>
              <MainContent component={search}/>
            </Suspense>
        </div>
    </div>
  )
}
