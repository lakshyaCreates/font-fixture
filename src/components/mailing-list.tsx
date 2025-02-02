import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const MailingList = () => {
    return (
        <div className="w-full max-w-xs">
            <h6 className="font-semibold">Join our mailing list</h6>
            <form className="mt-4 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
            </form>
        </div>
    );
};
