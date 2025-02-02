import { create } from "zustand";

interface State {
    primaryFont: string;
    secondaryFont: string;

    primaryFontClassName: string;
    secondaryFontClassName: string;
}

interface Action {
    setPrimaryFont: (primaryFont: string) => void;
    setSecondaryFont: (secondaryFont: string) => void;

    setPrimaryFontClassName: (className: string) => void;
    setSecondaryFontClassName: (className: string) => void;
}

export const useFonts = create<State & Action>((set) => ({
    primaryFont: "Inter",
    secondaryFont: "Roboto",

    primaryFontClassName: "",
    secondaryFontClassName: "",

    setPrimaryFont: (state) => set(() => ({ primaryFont: state })),
    setSecondaryFont: (state) => set(() => ({ secondaryFont: state })),

    setPrimaryFontClassName: (state) =>
        set(() => ({ primaryFontClassName: state })),
    setSecondaryFontClassName: (state) =>
        set(() => ({ secondaryFontClassName: state })),
}));
