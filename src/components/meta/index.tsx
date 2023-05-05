import React from "react"

import { Seo } from "../seo"

interface MetaProps {
    title: string;
    description: string;
}

export const Meta = ({ title, description }: MetaProps): JSX.Element => {
    return (
        <>
            <html lang="en" />
            <Seo
                title={title}
                description={description}
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link 
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Playfair+Display:wght@900&display=swap" 
                rel="stylesheet" 
            />
        </>
    )
}