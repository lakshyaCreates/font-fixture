"use client";

import {
    Roboto,
    Open_Sans,
    Inter,
    Montserrat,
    Lato,
    Roboto_Condensed,
    Raleway,
    Nunito,
    Rubik,
} from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});
const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const fonts = {
    Roboto: roboto.className,
    "Roboto Condensed": robotoCondensed.className,
    Inter: inter.className,
    "Open Sans": openSans.className,
    Montserrat: montserrat.className,
    Lato: lato.className,
    Raleway: raleway.className,
    Nunito: nunito.className,
    Rubik: rubik.className,
};

export const fontNames = Object.keys(fonts);

export function loadGoogleFont(fontName: string) {
    return fonts[fontName as keyof typeof fonts];
}

// Other exports
export * from "./font-switcher";
export * from "./use-fonts";
