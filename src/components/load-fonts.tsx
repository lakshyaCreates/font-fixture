"use client";

import { useFonts } from "@/features/fonts";

export const LoadFonts = () => {
    const { primaryFont, secondaryFont } = useFonts();

    return (
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=${primaryFont}&family=${secondaryFont}&display=swap`}
            />
            <style>
                {`
                    :root {
                        --font-primary: ${primaryFont};
                        --font-secondary: ${secondaryFont};
                    }
                `}
            </style>
        </head>
    );
};
