import cn from '@lib/cn'
import React, { ReactNode } from 'react'

export const Section = ({ title, highlight, className, style = {}, children }: { title: string, highlight?: string, className?: string, style: {}, children: ReactNode }) => {
    return (
        <section className={cn('w-full py-20 text-center', className)} style={style}>
            <h1 className="heading sm:text-xl md:text-5xl font-bold">
                {title} {" "}
                <span className="text-purple-400">{highlight}</span>
            </h1>
            {children}
        </section>
    )
}
