import { create } from "zustand";

interface State {
    primaryFont: string;
    secondaryFont: string;
}

interface Action {
    setPrimaryFont: (primaryFont: string) => void;
    setSecondaryFont: (secondaryFont: string) => void;
}

export const useFonts = create<State & Action>((set) => ({
    primaryFont: "Inter",
    secondaryFont: "Roboto",

    setPrimaryFont: (state) => set(() => ({ primaryFont: state })),
    setSecondaryFont: (state) => set(() => ({ secondaryFont: state })),
}));
