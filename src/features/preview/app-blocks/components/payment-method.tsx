"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";
import { FaPaypal } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PaymentMethod = () => {
    const [active, setActive] = useState<"card" | "paypal" | "apple">("apple");

    return (
        <Card className="font-secondary">
            <CardHeader>
                <CardTitle className="font-primary">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="font-primary grid grid-cols-3 gap-4">
                        <Button
                            onClick={() => {
                                setActive("card");
                            }}
                            variant="outline"
                            className={cn(
                                "flex h-24 flex-col items-center justify-center",
                                active == "card" && "border-muted-foreground",
                            )}
                        >
                            <CreditCard className="mb-2 h-6 w-6" />
                            <span>Card</span>
                        </Button>
                        <Button
                            onClick={() => setActive("paypal")}
                            variant="outline"
                            className={cn(
                                "flex h-24 flex-col items-center justify-center",
                                active == "paypal" && "border-muted-foreground",
                            )}
                        >
                            <FaPaypal className="mb-2 h-6 w-6" />
                            <span>Paypal</span>
                        </Button>
                        <Button
                            onClick={() => setActive("apple")}
                            variant="outline"
                            className={cn(
                                "flex h-24 flex-col items-center justify-center",
                                active == "apple" && "border-muted-foreground",
                            )}
                        >
                            <svg className="mb-2 h-6 w-6" viewBox="0 0 24 24">
                                <path
                                    d="M17.0391667,11.1735833 C16.9858333,11.4852500 16.9141667,11.8185833 16.8275000,12.1702500 C16.0725000,15.3402500 14.0725000,16.5752500 11.3025000,16.5752500 C8.53250000,16.5752500 7.06583333,15.3402500 7.82083333,12.1702500 C8.57583333,9.00025000 10.5758333,7.76525000 13.3458333,7.76525000 C16.1158333,7.76525000 17.5825000,9.00025000 16.8275000,12.1702500 M24.0000000,7.76525000 L19.2000000,7.76525000 L17.6000000,16.5752500 L22.4000000,16.5752500 L24.0000000,7.76525000 Z M0.00000000,7.76525000 L4.80000000,7.76525000 L6.40000000,16.5752500 L1.60000000,16.5752500 L0.00000000,7.76525000 Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span>Apple</span>
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card">Card number</Label>
                        <Input id="card" placeholder="Card number" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label>Expires</Label>
                            <Input placeholder="MM" />
                        </div>
                        <div className="space-y-2">
                            <Label>Year</Label>
                            <Input placeholder="YYYY" />
                        </div>
                        <div className="space-y-2">
                            <Label>CVC</Label>
                            <Input placeholder="CVC" />
                        </div>
                    </div>
                </div>
                <Button className="font-primary mt-4 w-full">Continue</Button>
            </CardContent>
        </Card>
    );
};
