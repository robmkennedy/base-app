import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@state/store';

/**
 * A hook used to return the typed version of the redux useSelector. It is based
 * on the RootState, which itself is inferred from the store after it was created.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
