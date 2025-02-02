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
    Poppins,
    Ubuntu,
    Playfair_Display,
    Source_Sans_3,
    Oswald,
    Noto_Sans,
    Merriweather,
    PT_Sans,
    Work_Sans,
    Mulish,
    Quicksand,
    Noto_Serif,
    Josefin_Sans,
    DM_Sans,
    Bitter,
    Crimson_Text,
    Libre_Baskerville,
    Karla,
    Fira_Sans,
    Source_Serif_4,
    Manrope,
    Space_Grotesk,
    Urbanist,
    Plus_Jakarta_Sans,
    Outfit,
    Be_Vietnam_Pro,
    Lexend,
    Exo_2,
    Comfortaa,
    Barlow,
    Barlow_Condensed,
    Archivo,
    Red_Hat_Display,
    Prompt,
    IBM_Plex_Sans,
    IBM_Plex_Serif,
    Overpass,
    Kanit,
    Public_Sans,
    Sora,
    Jost,
    Nanum_Gothic,
    Signika,
    M_PLUS_Rounded_1c,
    Lobster,
    Permanent_Marker,
    Caveat,
    Cardo,
    Cormorant,
    Cormorant_Garamond,
    Playfair_Display_SC,
    Alegreya,
    Alegreya_Sans,
    Source_Code_Pro,
    Fira_Code,
    JetBrains_Mono,
    Space_Mono,
    Anonymous_Pro,
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

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
});

const ptSans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const crimsonText = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const karla = Karla({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sourceSerif4 = Source_Serif_4({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const exo2 = Exo_2({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const prompt = Prompt({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const overpass = Overpass({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const jost = Jost({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const signika = Signika({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
});

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: ["400"],
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const cardo = Cardo({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const alegreya = Alegreya({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceCodePro = Source_Code_Pro({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
    Poppins: poppins.className,
    Ubuntu: ubuntu.className,
    "Playfair Display": playfairDisplay.className,
    "Source Sans 3": sourceSans3.className,
    Oswald: oswald.className,
    "Noto Sans": notoSans.className,
    Merriweather: merriweather.className,
    "PT Sans": ptSans.className,
    "Work Sans": workSans.className,
    Mulish: mulish.className,
    Quicksand: quicksand.className,
    "Noto Serif": notoSerif.className,
    "Josefin Sans": josefinSans.className,
    "DM Sans": dmSans.className,
    Bitter: bitter.className,
    "Crimson Text": crimsonText.className,
    "Libre Baskerville": libreBaskerville.className,
    Karla: karla.className,
    "Fira Sans": firaSans.className,
    "Source Serif 4": sourceSerif4.className,
    Manrope: manrope.className,
    "Space Grotesk": spaceGrotesk.className,
    Urbanist: urbanist.className,
    "Plus Jakarta Sans": plusJakartaSans.className,
    Outfit: outfit.className,
    "Be Vietnam Pro": beVietnamPro.className,
    Lexend: lexend.className,
    "Exo 2": exo2.className,
    Comfortaa: comfortaa.className,
    Barlow: barlow.className,
    "Barlow Condensed": barlowCondensed.className,
    Archivo: archivo.className,
    "Red Hat Display": redHatDisplay.className,
    Prompt: prompt.className,
    "IBM Plex Sans": ibmPlexSans.className,
    "IBM Plex Serif": ibmPlexSerif.className,
    Overpass: overpass.className,
    Kanit: kanit.className,
    "Public Sans": publicSans.className,
    Sora: sora.className,
    Jost: jost.className,
    Signika: signika.className,
    Lobster: lobster.className,
    "Permanent Marker": permanentMarker.className,
    Caveat: caveat.className,
    Cardo: cardo.className,
    Alegreya: alegreya.className,
    "Source Code Pro": sourceCodePro.className,
    "Fira Code": firaCode.className,
    "JetBrains Mono": jetBrainsMono.className,
};

export const fontNames = Object.keys(fonts);

export function loadGoogleFont(fontName: string) {
    return fonts[fontName as keyof typeof fonts];
}

// Other exports
export * from "./font-switcher";
export * from "./use-fonts";
