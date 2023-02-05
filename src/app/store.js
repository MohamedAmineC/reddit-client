import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchBar/searchBarSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    categories: categoriesReducer,
  },
});
