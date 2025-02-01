"use client";

import { useEffect } from "react";
import { TbArrowsRandom } from "react-icons/tb";

import { useRouter, useSearchParams } from "next/navigation";

import { fontNames, loadGoogleFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useFonts } from "./use-fonts";

export const FontSwitcher = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        primaryFont,
        secondaryFont,
        setPrimaryFont,
        setSecondaryFont,
        setPrimaryFontClassName,
        primaryFontClassName,
        secondaryFontClassName,
        setSecondaryFontClassName,
    } = useFonts();

    useEffect(() => {
        const loadFonts = async () => {
            const primaryClassName = await loadGoogleFont(primaryFont);
            const secondaryClassName = await loadGoogleFont(secondaryFont);
            setPrimaryFontClassName(primaryClassName);
            setSecondaryFontClassName(secondaryClassName);
        };
        loadFonts();
    }, [primaryFont, secondaryFont]);

    useEffect(() => {
        const url = new URL(window.location.href);

        url.searchParams.set("primary", primaryFont);
        url.searchParams.set("secondary", secondaryFont);

        router.replace(url.pathname + url.search);
    }, [primaryFont, secondaryFont, router]);

    return (
        <div className="z-50 flex w-full flex-wrap items-center justify-center gap-4 rounded-lg border bg-background p-3 sm:flex-nowrap">
            <Select
                onValueChange={(value) => {
                    setPrimaryFont(value);
                }}
                value={primaryFont}
            >
                <SelectTrigger
                    className={cn(
                        "relative flex items-center justify-between",
                        primaryFontClassName,
                    )}
                >
                    <span className="text-xs font-medium text-muted-foreground">
                        Primary
                    </span>
                    <SelectValue
                        placeholder={primaryFont}
                        className={primaryFontClassName}
                    />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem
                            key={font}
                            value={font}
                            className={cn(primaryFontClassName, "font-medium")}
                        >
                            {font}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select
                onValueChange={(value) => {
                    setSecondaryFont(value);
                }}
                value={secondaryFont}
            >
                <SelectTrigger
                    className={cn(
                        "relative flex items-center justify-between font-semibold",
                        secondaryFontClassName,
                    )}
                >
                    <span className="text-xs font-medium text-muted-foreground">
                        Secondary
                    </span>
                    <SelectValue
                        placeholder={secondaryFont}
                        className={secondaryFontClassName}
                    />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem
                            key={font}
                            value={font}
                            className={cn(
                                secondaryFontClassName,
                                "font-medium",
                            )}
                        >
                            {font}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button variant={"secondary"} size={"sm"} onClick={() => {}}>
                <TbArrowsRandom className="!size-[18px]" />
            </Button>
        </div>
    );
};

export { useFonts };
