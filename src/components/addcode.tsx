import React from 'react'
import { CodeBlock } from './codeblock'

export const Addcode = () => {
    const codeString = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`

    const installCommand = `npm install motion clsx tailwind-merge react-icons`;
    
  return (
    <>
        <CodeBlock codeString={installCommand} language='shell' title='Install dependencies'/>
        <CodeBlock codeString={codeString} fileName='lib/utils.ts' language='typescript' title='Add utility file'/>
    </>
  )
}
