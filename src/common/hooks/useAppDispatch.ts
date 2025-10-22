import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@state/store';

/**
 * A typed hook used to return the typed version of the redux useDispatch hook.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
