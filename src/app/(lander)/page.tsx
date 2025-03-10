import { LandingBackgroundPattern } from "@/components/landing-background-pattern";

import { Hero } from "./_components/hero";
import { FontSwitcher } from "@/features/fonts";
import { AppBlocks } from "@/features/preview";

export default function HomePage() {
    return (
        <>
            <LandingBackgroundPattern />
            <div className="mx-auto max-w-xl space-y-12 px-12 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <Hero />
                <FontSwitcher />
                <AppBlocks />
            </div>
        </>
    );
}
