"use client";

import { CheckIcon, ChevronsUpDownIcon, Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { fontNames, useFonts } from ".";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export const FontSwitcher = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { primaryFont, secondaryFont, setPrimaryFont, setSecondaryFont } =
        useFonts();

    const [copied, setCopied] = useState(false);
    const [priSlot, setPriSlot] = useState(false);
    const [secSlot, setSecSlot] = useState(false);

    useEffect(() => {
        const primaryFontInQuery = searchParams.get("primaryFont");
        if (primaryFontInQuery) setPrimaryFont(primaryFontInQuery);

        const secondaryFontInQuery = searchParams.get("secondaryFont");
        if (secondaryFontInQuery) setSecondaryFont(secondaryFontInQuery);
    }, [searchParams]);

    return (
        <div className="flex w-full flex-wrap items-center gap-2 rounded-lg border bg-background p-2 sm:flex-nowrap">
            <Popover open={priSlot} onOpenChange={setPriSlot}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        role="combobox"
                        aria-expanded={priSlot}
                        className="font-primary w-full justify-between"
                    >
                        <span className="text-xs font-medium text-muted-foreground">
                            Primary Font
                        </span>
                        <span>{primaryFont ? primaryFont : "Select Font"}</span>
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command className="w-full">
                        <CommandInput placeholder="Search Font..." />
                        <CommandList>
                            <CommandEmpty>No font found</CommandEmpty>
                            <CommandGroup>
                                {fontNames.map((font) => (
                                    <CommandItem
                                        key={font}
                                        value={font}
                                        onSelect={(current) => {
                                            setPrimaryFont(current);
                                            setPriSlot(false);

                                            const params = new URLSearchParams(
                                                searchParams.toString(),
                                            );
                                            params.delete("primaryFont");
                                            params.set("primaryFont", current);

                                            window.history.replaceState(
                                                null,
                                                "",
                                                `${pathname}?${params.toString()}`,
                                            );
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 size-4",
                                                font === primaryFont
                                                    ? "opacity-100"
                                                    : "opacity-0",
                                            )}
                                        />
                                        <span>{font}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <Popover open={secSlot} onOpenChange={setSecSlot}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        role="combobox"
                        aria-expanded={secSlot}
                        className="font-secondary w-full justify-between"
                    >
                        <span className="text-xs font-medium text-muted-foreground">
                            Secondary Font
                        </span>
                        <span>
                            {secondaryFont ? secondaryFont : "Select Font"}
                        </span>
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command className="w-full">
                        <CommandInput placeholder="Search Font..." />
                        <CommandList>
                            <CommandEmpty>No font found</CommandEmpty>
                            <CommandGroup>
                                {fontNames.map((font) => (
                                    <CommandItem
                                        key={font}
                                        value={font}
                                        onSelect={(current) => {
                                            setSecondaryFont(current);
                                            setSecSlot(false);

                                            const params = new URLSearchParams(
                                                searchParams.toString(),
                                            );
                                            params.delete("secondaryFont");
                                            params.set(
                                                "secondaryFont",
                                                current,
                                            );

                                            window.history.replaceState(
                                                null,
                                                "",
                                                `${pathname}?${params.toString()}`,
                                            );
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 size-4",
                                                font === secondaryFont
                                                    ? "opacity-100"
                                                    : "opacity-0",
                                            )}
                                        />
                                        <span>{font}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
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
