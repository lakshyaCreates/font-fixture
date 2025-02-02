import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import { Toaster } from "../ui/sonner";

import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange
            >
                {children}
                <WrapBalancerProvider />
                <Toaster />
                <VercelAnalytics />
            </ThemeProvider>
        </>
    );
}
