import { Logo } from "../logo";

export const Header = () => {
    return (
        <header className="absolute inset-0 left-12 top-12 max-h-fit max-w-fit">
            <Logo />
        </header>
    );
};
