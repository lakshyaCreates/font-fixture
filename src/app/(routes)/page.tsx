import { BackgroundPattern } from "@/components/background-pattern";

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function NewPage() {
    return (
        <div className="relative space-y-12 px-12">
            <BackgroundPattern />
            <Header />
            <Hero />
            <main className="mx-auto flex size-full max-w-5xl items-center justify-center px-12">
                // main app
            </main>
        </div>
    );
}
