"use client";

import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const TeamMembers = () => {
    return (
        <Card className="font-secondary">
            <CardHeader>
                <CardTitle className="font-primary">Team Members</CardTitle>
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
                                    <p className="font-primary">{i.name}</p>
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
        name: "John Doe",
        username: "john.doe07",
    },
    {
        avatar: "/team-member-avatar-02.png",
        name: "James Bond",
        username: "jamesb0nd",
    },
    {
        avatar: "/team-member-avatar-03.png",
        name: "Daniel Mack",
        username: "danielmack",
    },
];
