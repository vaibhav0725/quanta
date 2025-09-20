"use client";
import React, { useState } from 'react'
import { DemoBlock } from './demoblock'
import { Addcode } from './addcode'
import {motion} from "motion/react"
import { CodeBlock } from './codeblock';
import { DemoCodeBlock } from './demo-codeblock';
import { PropsTable } from './props-table';
import { componentRegistry } from '@/lib/component-registry';
import { Linker } from './linker';

export const MainContent = ({component}:{component: string | null}) => {
    const [active, setActive] = useState<boolean>(true);
    
    // Get component info from registry
    const componentInfo = component ? componentRegistry[component] : null;
    
    // Debug logging
    console.log('Selected component:', component);
    console.log('Component info:', componentInfo);
    console.log('Available components:', Object.keys(componentRegistry));
    
    // If no component selected, show welcome message
    if (!componentInfo) {
        return (
            <div className='flex flex-col items-center justify-center h-full text-center'>
                <h1 className='text-6xl font-bold font-jetbrain tracking-[-6px] mb-4'>Quanta</h1>
                <p className='text-xl text-neutral-400'>Select a component from the sidebar to get started</p>
            </div>
        );
    }

    // Get the component to render with sample props
    const ComponentToRender = componentInfo.component;
    const sampleProps = componentInfo.name === 'FloatingBanner' 
        ? { text: 'Welcome to Quanta UI' }
        : componentInfo.name === 'TextDisplay'
        ? { words: 'Embrace the journey and shine every day' }
        : componentInfo.name === 'HighLighter'
        ? { text: 'Highlighted Text Example' }
        : {};

    return (
      <>
        <h1 className='text-4xl font-semibold font-jetbrain tracking-[-2px]'>{componentInfo.name}</h1>
        <p className='text-neutral-400 mt-2'>{componentInfo.description}</p>
        <div className='border border-neutral-800 mt-3 p-0.5 flex w-fit rounded-xl font-semibold text-sm'>
          <button
            onClick={() => setActive(true)}
            className={`relative p-2`}
          >
            <span className='z-10 relative'>Preview</span>
            {active && (
              <motion.span layoutId='active' className='bg-blue-500/40 border border-blue-500/30 rounded-lg inset-0 absolute w-full h-full pointer-events-none'></motion.span>
            )}
          </button>
          <button
            onClick={() => setActive(false)}
            className={`relative p-2`}
          >
            <span className='relative z-10'>Example</span>
            {!active && (
              <motion.span layoutId='active' className='bg-blue-500/40 border border-blue-500/30 text-blue-400 rounded-lg inset-0 absolute w-full h-full pointer-events-none'></motion.span>
            )}
          </button>
        </div>
        {   
            active 
                ?
                    <DemoBlock>
                        <ComponentToRender {...sampleProps} />
                    </DemoBlock>
                :
                    <DemoCodeBlock codeString={componentInfo.code} language='typescript'/>
        }
        <div className='mt-5 mx-auto px-10 flex gap-5 flex-col border-x border-neutral-800'>
            <Addcode/>
            <CodeBlock codeString={componentInfo.code} fileName={`${componentInfo.name}.tsx`} language='typescript' title='Component Code'/>
        </div>
        <PropsTable props={componentInfo.props}/>
    </>
  )
}
