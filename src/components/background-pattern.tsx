"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";

export const BackgroundPattern = () => {
    const { resolvedTheme } = useTheme();
    const isLightTheme = resolvedTheme === "light";

    return (
        <>
            <DotPattern
                width={16}
                height={16}
                cy={0.85}
                cx={0.85}
                cr={0.85}
                className={cn(
                    "[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_35%,black_50%)]",
                    "-mt-2 opacity-70 dark:fill-slate-700",
                    // "[mask-image:linear-gradient(to_bottom,white_70%,transparent,transparent)]",
                )}
            />
            <Particles
                className="absolute inset-0"
                quantity={157}
                ease={80}
                color={isLightTheme ? "#000" : "#fff"}
                refresh
            />
        </>
    );
};
