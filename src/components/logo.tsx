import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex size-fit flex-nowrap items-center gap-2">
            <Image
                src={"/font-fixture-icon.png"}
                alt="Font Fixture Logo"
                width={120}
                height={120}
                className="aspect-square size-6 object-cover object-center"
            />
            <h3 className="text-nowrap font-bold tracking-tight">
                Font Fixture
            </h3>
        </div>
    );
};
