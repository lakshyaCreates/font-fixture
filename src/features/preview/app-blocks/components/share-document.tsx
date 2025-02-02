import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useFonts } from "@/features/fonts";

export const ShareDocument = () => {
    const { primaryFontClassName, secondaryFontClassName } = useFonts();
    return (
        <Card className={secondaryFontClassName}>
            <CardHeader>
                <CardTitle className={primaryFontClassName}>
                    Share this document
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            defaultValue="http://example.com/link/to/document"
                            readOnly
                            className="w-full"
                        />
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "http://example.com/link/to/document",
                                );
                                toast.success("Document Link Copied", {});
                            }}
                            variant="secondary"
                        >
                            Copy Link
                        </Button>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">
                                        Sarah Wilson
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        @sarahw
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline">Can edit</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
