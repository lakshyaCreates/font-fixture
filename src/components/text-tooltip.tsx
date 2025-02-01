"use client";

import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

interface Props {
    children: React.ReactNode;
    text: string;
    className: string;
}

export const TextTooltip = ({ children, text, className }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={cn("!z-[9999]", className)}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
