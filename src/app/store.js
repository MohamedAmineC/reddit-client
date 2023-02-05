import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchBar/searchBarSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    categories: categoriesReducer,
    posts: postsReducer,
  },
});
