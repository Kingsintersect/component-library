"use client"
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { createContext, useContext, FC, useState, ReactNode } from 'react';

type AccordionItem = {
    title: string;
    content: string;
};

const Accordion: FC<{ items: AccordionItem[] }> = ({ items }) => {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                    <AccordionHearder index={index} title={item.title} />
                    <AccordionContent index={index} content={item.content} />
                </div>
            ))}
        </div>
    );
};

export default Accordion;

const AccordionHearder = ({ index, title }: { index: number, title: string }) => {
    const { activeIndex, setActiveIndex } = useAccordion();

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <button
            className="w-full text-left p-4 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => handleClick(index)}
        >
            <div className="flex justify-between items-center font-semibold text-slate-500">
                <span>{title}</span>
                <ChevronDownIcon width={30} className={`h-6 w-6 transition-transform transform ${index === activeIndex ? 'rotate-180' : ''
                    }`} />
            </div>
        </button>
    )
}

const AccordionContent = ({ index, content }: { index: number, content: string }) => {
    const { activeIndex, setActiveIndex } = useAccordion();

    return (
        <div className={`transition-all duration-500 overflow-hidden ${index === activeIndex ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`} >
            <div className="p-4 bg-gray-100 min-h-[150px]">
                <p>{content}</p>
            </div>
        </div>
    )
}


// ACCORDION CONTEXT DEFINITON
type AccordionContextType = {
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('useAccordion must be used within an AccordionProvider');
    }
    return context;
};

interface AccordionProviderProps {
    children: ReactNode;
}
export const AccordionProvider: FC<AccordionProviderProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </AccordionContext.Provider>
    );
};
