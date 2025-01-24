import Balancer from "react-wrap-balancer";

import { Badge } from "@/components/ui/badge";

export const Hero = () => {
    return (
        <div className="relative z-10 max-w-3xl text-center">
            <Badge className="rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary py-1">
                We're live on Product Hunt
            </Badge>
            <Balancer>
                <h1
                    className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl"
                    suppressHydrationWarning
                >
                    Find Your Perfect Font Pair
                </h1>
                <p className="mt-6 text-[17px] md:text-lg">
                    Test and preview fonts in real-time for all your design
                    needs. Choose the perfect typeface with ease.
                </p>
            </Balancer>
        </div>
    );
};
