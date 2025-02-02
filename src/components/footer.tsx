import {
    DribbbleIcon,
    GithubIcon,
    TwitchIcon,
    TwitterIcon,
} from "lucide-react";
import { FaGithub, FaHeart } from "react-icons/fa6";

import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { Logo } from "./logo";
import { MailingList } from "./mailing-list";
import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer className="mt-12 border-t">
            <div className="mx-auto max-w-screen-xl">
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-0">
                    <div className="space-y-4">
                        <Logo />
                        <p className="inline-flex items-center gap-2 text-nowrap text-sm text-muted-foreground">
                            Made with{" "}
                            <FaHeart className="-mx-0.5 fill-rose-600" /> by
                            <Link
                                href={"https://lakshyasharma.dev"}
                                className="-ml-1 text-primary/80 hover:text-primary hover:underline"
                            >
                                Lakshya Sharma
                            </Link>
                        </p>
                    </div>

                    <MailingList />
                </div>
                <Separator />
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link href="/" target="_blank">
                            Font Fixture
                        </Link>
                        . All rights reserved.
                    </span>

                    <div className="flex items-center gap-5 text-muted-foreground">
                        {socials.map((item, i) => (
                            <Button
                                key={`social-${i}`}
                                asChild
                                size={"icon"}
                                variant={"ghost"}
                            >
                                <Link href={item.href}>
                                    <item.icon />
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const socials = [
    {
        icon: FaGithub,
        href: "https://github.com/lakshyaCreates/font-fixture",
    },
];
