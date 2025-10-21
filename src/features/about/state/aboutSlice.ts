import type { StateCreator } from 'zustand/vanilla';

export type AboutSlice = {
    aboutContent: string;
    setAboutContent: (aboutContent: string) => void;
};

export const createAboutSlice: StateCreator<AboutSlice, [], [], AboutSlice> = (set) => ({
    aboutContent: '',
    setAboutContent: (aboutContent) => set(() => ({ aboutContent: aboutContent }))
});
