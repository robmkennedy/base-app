import { create } from 'zustand';
import { type ChallengeSlice, createChallengeSlice } from '@features/challenge/state/challengeSlice';

// Build an overall Store type
type GlobalStore = ChallengeSlice;

// Actually create the store from multiple slices
export const useGlobalStore = create<GlobalStore>()((...args) => ({
    ...createChallengeSlice(...args)
}));
