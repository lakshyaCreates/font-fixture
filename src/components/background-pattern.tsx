"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";

export const BackgroundPattern = () => {
    const { resolvedTheme } = useTheme();
    const isLightTheme = resolvedTheme === "light";

    return (
        <div className="absolute inset-0 left-0 top-0 -mt-16">
            <DotPattern
                width={18}
                height={18}
                cy={0.95}
                cx={0.95}
                cr={0.95}
                className={cn(
                    "[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_35%,black_50%)]",
                    "-z-50 -mt-2 opacity-90 dark:fill-slate-700",
                )}
            />
            <Particles
                className="absolute inset-0 -z-20"
                quantity={157}
                ease={80}
                color={isLightTheme ? "#000" : "#fff"}
                refresh
            />
            <div className="pointer-events-none absolute inset-0 -z-10 flex size-full items-center justify-center bg-background [mask-image:linear-gradient(to_top,white,transparent_50%,transparent)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 flex size-full items-center justify-center bg-background [mask-image:linear-gradient(to_bottom,white,transparent_20%,transparent)]" />
        </div>
    );
};
