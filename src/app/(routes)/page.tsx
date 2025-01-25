import { Header } from "./header";
import { Hero } from "./hero";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <main className="z-30 -mt-[25vh] flex flex-col items-center justify-center"></main>
        </>
    );
}
