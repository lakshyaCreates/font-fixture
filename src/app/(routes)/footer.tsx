import { FaGithub, FaGlobe, FaHeart, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <footer className="flex h-fit w-full flex-col space-y-4 border-t bg-background px-12 pb-4 pt-6">
            {/* // TODO: Make the footer responsive */}
            <div className="flex size-full items-start justify-between gap-4 *:size-full">
                <Logo />
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Button asChild size={"icon"} variant={"ghost"}>
                        <Link href={"/"}>
                            <FaGithub />
                        </Link>
                    </Button>
                    <Button asChild size={"icon"} variant={"ghost"}>
                        <Link href={"/"}>
                            <FaXTwitter />
                        </Link>
                    </Button>
                    <Button asChild size={"icon"} variant={"ghost"}>
                        <Link href={"/"}>
                            <FaGlobe />
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-col flex-nowrap items-end justify-end gap-2 text-end">
                    <p className="inline-flex items-center gap-2 text-nowrap">
                        Made with <FaHeart className="fill-rose-600" /> by
                        Lakshya Sharma
                    </p>
                </div>
            </div>
        </footer>
    );
};
