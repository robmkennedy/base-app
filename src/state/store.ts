import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '@features/search/state/searchSlice';
import { searchApiSlice } from '@features/search/state/searchApiSlice';

// The root reducer for the store.
const rootReducer = {
    [searchSlice.reducerPath]: searchSlice.reducer,
    [searchApiSlice.reducerPath]: searchApiSlice.reducer
};

/**
 * Set up the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the search API.
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([searchApiSlice.middleware])
});

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;