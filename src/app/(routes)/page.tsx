import { BackgroundPattern } from "@/components/background-pattern";

import { Hero } from "./hero";

export default function HomePage() {
    return (
        <div className="relative flex size-full min-h-screen items-center justify-center px-6">
            <Hero />
            <BackgroundPattern />
            <div className="pointer-events-none absolute inset-2 flex items-center justify-center bg-white [mask-image:linear-gradient(to_top,white,transparent_30%,transparent)] dark:bg-black" />
        </div>
    );
}
