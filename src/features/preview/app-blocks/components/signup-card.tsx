"use client";

import { FaGithub, FaGoogle } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFonts } from "@/features/fonts";

export const SignupCard = () => {
    const { primaryFontClassName, secondaryFontClassName } = useFonts();

    return (
        <Card className={cn(secondaryFontClassName, "")}>
            <CardHeader>
                <CardTitle className={cn(primaryFontClassName)}>
                    Create an account
                </CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div
                    className={cn(
                        "flex w-full flex-nowrap items-center justify-between gap-4 *:w-full",
                        primaryFontClassName,
                    )}
                >
                    <Button variant="outline">
                        <FaGithub className="size-4" />
                        <span>GitHub</span>
                    </Button>
                    <Button variant="outline">
                        <FaGoogle className="size-4" />
                        <span>Google</span>
                    </Button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-xs uppercase text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                <div>
                    <Label>Email</Label>
                    <Input
                        placeholder="example@something.com"
                        type="email"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="*******"
                    />
                </div>
                <Button
                    type="button"
                    className={cn("w-full", primaryFontClassName)}
                >
                    Create Account
                </Button>
            </CardContent>
        </Card>
    );
};
