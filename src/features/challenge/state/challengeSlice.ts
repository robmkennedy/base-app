import type { StateCreator } from 'zustand/vanilla';

export type ChallengeSlice = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
};

export const createChallengeSlice: StateCreator<ChallengeSlice, [], [], ChallengeSlice> = (set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm) => set(() => ({ searchTerm: searchTerm }))
});