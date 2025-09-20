"use client";
import React, { useState } from 'react'
import { FaCodeCompare, FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { getComponentsByCategory } from '@/lib/component-registry';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Linker } from './linker';

export const Sidebar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedComponent = searchParams.get('component');
    const componentsByCategory = getComponentsByCategory();
    
    // State to track which categories are expanded
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
        // Start with all categories expanded by default
        const initial: Record<string, boolean> = {};
        Object.keys(componentsByCategory).forEach(category => {
            initial[category] = true;
        });
        return initial;
    });

    const handleComponentSelect = (componentName: string) => {
        router.push(`?component=${componentName}`);
    };

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <div className='p-2 border border-neutral-800 text-white h-full rounded-xl relative overflow-hidden'>
            <Link href="/">
            <h2 className='text-4xl tracking-[-3px] font-jetbrain font-semibold flex items-center gap-2
            '>Quanta</h2>
            </Link>
            <div className='flex flex-col px-2 mt-5 space-y-4 border-neutral-800 border-b h-[70%] overflow-y-scroll'>
                {Object.entries(componentsByCategory).map(([category, components]) => (
                    <div key={category} className='space-y-2'>
                        {/* Category Header with Toggle Button */}
                        <button
                            onClick={() => toggleCategory(category)}
                            className='flex items-center gap-2 w-full text-left hover:bg-neutral-800/30 rounded-lg p-1 transition-colors group'
                        >
                            {expandedCategories[category] ? (
                                <FaChevronDown className='text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors' />
                            ) : (
                                <FaChevronRight className='text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors' />
                            )}
                            <h3 className='text-sm font-semibold text-neutral-400 uppercase tracking-wider group-hover:text-neutral-200 transition-colors'>
                                {category}
                            </h3>
                            <span className='text-xs text-neutral-600 ml-auto group-hover:text-neutral-400 transition-colors'>
                                ({components.length})
                            </span>
                        </button>
                        
                        {/* Components List - Only show if expanded */}
                        {expandedCategories[category] && (
                            <div className='space-y-1 ml-4'>
                                {components.map((component) => {
                                    // Convert component name to kebab-case for URL
                                    const componentKey = component.name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
                                    return (
                                        <button
                                            key={component.name}
                                            onClick={() => handleComponentSelect(componentKey)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                selectedComponent === componentKey
                                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                    : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                                            }`}
                                        >
                                            {component.name}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='inset-x-0 border-neutral-800 bottom-0 absolute w-fit scale-75 mx-auto flex justify-around'>
                <Linker/>
            </div>
        </div>
    )
}
