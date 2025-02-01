import { BackgroundPattern } from "@/components/background-pattern";

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { FontSwitcher } from "@/features/font-switcher";

export default function NewPage() {
    return (
        <div className="relative space-y-12 px-12">
            <BackgroundPattern />
            <Header />
            <Hero />
            <main className="mx-auto flex size-full max-w-5xl flex-col items-center justify-center px-12">
                <FontSwitcher />
                <div className="h-screen"></div>
            </main>
        </div>
    );
}
