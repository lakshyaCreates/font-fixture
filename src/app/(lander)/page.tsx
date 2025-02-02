import { Hero } from "./_components/hero";
import { FontSwitcher } from "@/features/fonts";

export default function HomePage() {
    return (
        <div className="mx-auto max-w-xl space-y-12 px-12 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <Hero />
            <FontSwitcher />
        </div>
    );
}
