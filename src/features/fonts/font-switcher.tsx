"use client";

import { CheckIcon, Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { fontNames, useFonts } from ".";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const FontSwitcher = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { primaryFont, secondaryFont, setPrimaryFont, setSecondaryFont } =
        useFonts();

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const primaryFontInQuery = searchParams.get("primaryFont");
        if (primaryFontInQuery) setPrimaryFont(primaryFontInQuery);

        const secondaryFontInQuery = searchParams.get("secondaryFont");
        if (secondaryFontInQuery) setSecondaryFont(secondaryFontInQuery);
    }, [searchParams]);

    return (
        <div className="flex w-full flex-wrap items-center gap-2 rounded-lg border bg-background p-2 sm:flex-nowrap">
            <Select
                onValueChange={(value) => {
                    setPrimaryFont(value);

                    const params = new URLSearchParams(searchParams.toString());
                    params.delete("primaryFont");
                    params.set("primaryFont", value);

                    window.history.replaceState(
                        null,
                        "",
                        `${pathname}?${params.toString()}`,
                    );
                }}
                value={primaryFont}
            >
                <SelectTrigger
                    className={cn(
                        "font-primary relative flex items-center justify-between",
                    )}
                >
                    <span className="text-xs font-medium text-muted-foreground">
                        Primary
                    </span>
                    <SelectValue placeholder={primaryFont} />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem key={font} value={font}>
                            {font}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select
                onValueChange={(value) => {
                    setSecondaryFont(value);

                    const params = new URLSearchParams(searchParams.toString());
                    params.delete("secondaryFont");
                    params.set("secondaryFont", value);

                    window.history.replaceState(
                        null,
                        "",
                        `${pathname}?${params.toString()}`,
                    );
                }}
                value={secondaryFont}
            >
                <SelectTrigger
                    className={cn(
                        "font-secondary relative flex items-center justify-between",
                    )}
                >
                    <span className="text-xs font-medium text-muted-foreground">
                        Secondary
                    </span>
                    <SelectValue placeholder={secondaryFont} />
                </SelectTrigger>
                <SelectContent>
                    {fontNames.map((font) => (
                        <SelectItem key={font} value={font}>
                            {font}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button
                onClick={() => {
                    // Logic to copy the url with search params
                    navigator.clipboard.writeText(window.location.href);

                    setCopied(true);
                    toast.success("URL Copied", {
                        duration: 1500,
                    });
                    setTimeout(() => {
                        setCopied(false);
                    }, 1500);
                }}
                size={"icon"}
                variant={"outline"}
                className="min-w-9"
            >
                {copied ? (
                    <CheckIcon className="text-muted-foreground" />
                ) : (
                    <Share2Icon className="text-muted-foreground" />
                )}
            </Button>
        </div>
    );
};
