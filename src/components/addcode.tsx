import React from 'react'
import { CodeBlock } from './codeblock'

export const Addcode = () => {
    const codeString = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`
  return (
    <>
        <CodeBlock codeString='npm i framer-motion clsx tailwind-merge' language='shell' title='Install dependencies'/>
        <CodeBlock codeString={codeString} fileName='lib/utils.ts' language='javascript' title='Add utility file'/>
        <CodeBlock codeString={codeString} fileName='lib/utils.ts' language='javascript' title='Code'/>
    </>
  )
}
