"use client";

import {
    CheckIcon,
    ChevronsUpDownIcon,
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
    Share2Icon,
} from "lucide-react";
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

const DiceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export const FontSwitcher = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { primaryFont, secondaryFont, setPrimaryFont, setSecondaryFont } =
        useFonts();

    const [copied, setCopied] = useState(false);

    const [priSlot, setPriSlot] = useState(false);
    const [secSlot, setSecSlot] = useState(false);

    const [diceIndex, setDiceIndex] = useState(0);
    const DiceIcon = DiceIcons[diceIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setDiceIndex((prevIndex) => (prevIndex + 1) % DiceIcons.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const primaryFontInQuery = searchParams.get("primaryFont");
        if (primaryFontInQuery) setPrimaryFont(primaryFontInQuery);

        const secondaryFontInQuery = searchParams.get("secondaryFont");
        if (secondaryFontInQuery) setSecondaryFont(secondaryFontInQuery);
    }, []);

    function updateSearchParams(
        type: "primaryFont" | "secondaryFont",
        value: string,
    ) {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(type);
        params.set(type, value);

        window.history.replaceState(
            null,
            "",
            `${pathname}?${params.toString()}`,
        );
    }

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

                                            updateSearchParams(
                                                "primaryFont",
                                                current,
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

                                            updateSearchParams(
                                                "secondaryFont",
                                                current,
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
                    // TODO: Logic to randomize the fonts
                    const primary =
                        fontNames[Math.floor(Math.random() * fontNames.length)];
                    const secondary =
                        fontNames[Math.floor(Math.random() * fontNames.length)];

                    setPrimaryFont(primary);
                    setSecondaryFont(secondary);

                    updateSearchParams("primaryFont", primary);
                    updateSearchParams("secondaryFont", secondary);
                }}
                size={"icon"}
                variant={"outline"}
                className="min-w-fit px-2.5 sm:min-w-9 sm:px-0"
            >
                <span className="block text-primary/90 sm:hidden">
                    Randomize
                </span>
                <DiceIcon className="text-muted-foreground" />
            </Button>
            <Button
                onClick={() => {
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
                className="min-w-fit px-2.5 sm:min-w-9 sm:px-0"
            >
                <span className="block text-primary/90 sm:hidden">Share</span>
                {copied ? (
                    <CheckIcon className="text-emerald-500" />
                ) : (
                    <Share2Icon className="text-muted-foreground" />
                )}
            </Button>
        </div>
    );
};
