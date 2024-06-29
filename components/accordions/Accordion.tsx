"use client"
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import cn from '@lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { createContext, useContext, FC, useState, ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';

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






// ACCORDION HEADER DEDFINITIONS
interface IAccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof accordionHeaderVariants> {
    index: number;
    title: string;
}

const AccordionHearder: FC<IAccordionHeaderProps> = ({ index, title, variant, className, ...props }) => {
    const { activeIndex, setActiveIndex } = useAccordion();

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <button className="w-full text-left p-4 focus:outline-none focus:ring focus:ring-blue-300" {...props} onClick={() => handleClick(index)} >
            <div className={cn(accordionHeaderVariants({ variant, className }))}>
                <span>{title}</span>
                <ChevronDownIcon width={30} className={`h-6 w-6 transition-transform transform ${index === activeIndex ? 'rotate-180' : ''
                    }`} />
            </div>
        </button>
    )
}

const accordionHeaderVariants = cva("flex justify-between items-center font-semibold text-slate-500", {
    variants: {
        variant: {
            primary: "",

            secondary: "",

            danger: "",
        },
    },
    defaultVariants: {
        variant: "primary",
    }
})

const IconContainer = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return <div className="min-w-6">{children}</div>
}

// ACCORDION CONTECT DEFINITIONS
interface IAccordionContentProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordionContentVariants> {
    index: number;
    content: string;
}

const AccordionContent: FC<IAccordionContentProps> = ({ index, content, variant, className, ...props }) => {
    const { activeIndex, setActiveIndex } = useAccordion();

    return (
        <div className={`transition-all duration-500 overflow-hidden ${index === activeIndex ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`} >
            <div className={cn(accordionContentVariants({ variant, className }))}>
                <p>{content}</p>
            </div>
        </div>
    )
}

const accordionContentVariants = cva("p-4 bg-gray-100 min-h-[150px]", {
    variants: {
        variant: {
            primary: "",

            secondary: "",

            danger: "",
        },
    },
    defaultVariants: {
        variant: "primary",
    }
})

export default Accordion;

















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
