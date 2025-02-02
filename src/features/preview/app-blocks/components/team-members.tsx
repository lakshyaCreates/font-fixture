"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { useFonts } from "@/features/fonts";

export const TeamMembers = () => {
    const { primaryFontClassName, secondaryFontClassName } = useFonts();

    return (
        <Card className={secondaryFontClassName}>
            <CardHeader>
                <CardTitle className={cn("", primaryFontClassName)}>
                    Team Members
                </CardTitle>
                <CardDescription>
                    Invite your team members to collaborate.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {members.map((i) => {
                    return (
                        <div
                            key={i.name}
                            className="flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-2">
                                <Image
                                    src={i.avatar}
                                    alt={`${i.name}'s avatar img`}
                                    width={100}
                                    height={100}
                                    className="aspect-auto size-10 rounded-full object-cover object-center"
                                />
                                <div>
                                    <p className={cn("", primaryFontClassName)}>
                                        {i.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        @{i.username}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};

const members = [
    {
        avatar: "/team-member-avatar-01.png",
        name: "Lakshya Sharma",
        username: "lakshya.creates07",
    },
    {
        avatar: "/team-member-avatar-02.png",
        name: "Bhumi Sharma",
        username: "leadwithbhumi",
    },
    {
        avatar: "/team-member-avatar-03.png",
        name: "Kaushal Gohil",
        username: "kaushalgohil1999",
    },
];
