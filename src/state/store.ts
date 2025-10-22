import { create } from 'zustand';
import { type SearchSlice, createSearchSlice } from '@features/search/state/searchSlice';

// Build an overall Store type
type GlobalStore = SearchSlice;

// Actually create the store from multiple slices
export const useGlobalStore = create<GlobalStore>()((...args) => ({
    ...createSearchSlice(...args)
}));
