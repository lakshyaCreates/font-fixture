"use client";

import { useEffect } from "react";

import { fontNames, loadGoogleFont, useFonts } from ".";

import { cn } from "@/lib/utils";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const FontSwitcher = () => {
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
    return (
        <div className="flex w-full flex-wrap items-center gap-2 rounded-lg border bg-background p-2 sm:flex-nowrap">
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
                    <SelectValue placeholder={primaryFont} />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem
                            key={font}
                            value={font}
                            className={cn(loadGoogleFont(font))}
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
                        "relative flex items-center justify-between",
                        secondaryFontClassName,
                    )}
                >
                    <span className="text-xs font-medium text-muted-foreground">
                        Secondary
                    </span>
                    <SelectValue placeholder={secondaryFont} />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem
                            key={font}
                            value={font}
                            className={cn(loadGoogleFont(font))}
                        >
                            {font}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
