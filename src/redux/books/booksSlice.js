import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const bookItems = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  books: [...bookItems],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => produce(state, (draftState) => {
      draftState.books.push({ id: payload.id, title: payload.title, author: payload.author });
    }),
    removeBook: (state, action) => {
      const bookId = action.payload;
      return produce(state, (draftState) => {
        const bookIndex = draftState.books.findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          draftState.books.splice(bookIndex, 1);
        }
      });
    },

  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
