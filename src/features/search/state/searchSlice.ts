import type { StateCreator } from 'zustand/vanilla';

export type SearchSlice = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
};

export const createSearchSlice: StateCreator<SearchSlice, [], [], SearchSlice> = (set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm) => set(() => ({ searchTerm: searchTerm }))
});