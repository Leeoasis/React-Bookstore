import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  addBook: (state, action) => ({
    ...state,
    books: [...state.books, action.payload],
  }),
  removeBook: (state, action) => ({
    ...state,
    books: state.books.filter((book) => book.id !== action.payload.id),
  }),
});

export default booksSlice.reducer;
