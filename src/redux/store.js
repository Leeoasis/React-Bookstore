import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default configureStore;
