"use client";

import { CaseSensitive, Palette, Type } from "lucide-react";

import { useTheme } from "next-themes";

import { Dock, DockIcon, DockItem, DockLabel } from "./ui/dock";

export const ToolsDock = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed bottom-4 left-1/2 max-w-full -translate-x-1/2">
            <Dock className="items-end pb-3">
                {data.map((item, idx) => (
                    <DockItem
                        key={idx}
                        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
                    >
                        <DockLabel>{item.title}</DockLabel>
                        <DockIcon>{item.icon}</DockIcon>
                    </DockItem>
                ))}
                <button
                    onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }}
                >
                    <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                        <DockLabel>Switch Theme</DockLabel>
                        <DockIcon>
                            <Palette className="size-full text-neutral-600 dark:text-neutral-300" />
                        </DockIcon>
                    </DockItem>
                </button>
            </Dock>
        </div>
    );
};

const data = [
    {
        title: "Font Matcher",
        icon: (
            <Type className="h-full w-full text-neutral-600 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Type Scale Tester",
        icon: (
            <CaseSensitive className="h-full w-full text-neutral-600 dark:text-neutral-300" />
        ),
        href: "#",
    },
];
