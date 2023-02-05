import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
  },
});
