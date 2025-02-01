"use client";

import { Roboto, Open_Sans, Inter } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const fonts = {
    Roboto: roboto.className,
    Inter: inter.className,
    "Open Sans": openSans.className,
};

export const fontNames = Object.keys(fonts);

export async function loadGoogleFont(fontName: string) {
    return fonts[fontName as keyof typeof fonts];
}
