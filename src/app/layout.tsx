import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Providers from "@/components/providers";
import { ToolsDock } from "@/components/tools-dock";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Font Fixture",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} overflow-x-hidden antialiased`}
            >
                <Providers>
                    <Header />
                    <ToolsDock />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
