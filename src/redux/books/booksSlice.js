import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlEndPoint = 'z2NP5NXo87KPEKUYTK76/books/';
const apiUrl = baseUrl + urlEndPoint;

function transformData(data) {
  return data.map(([id, [book]]) => {
    const { title, author, category } = book;
    return {
      id, title, author, category,
    };
  });
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiUrl);
  const { data } = response;
  return transformData(Object.entries(data));
});

export const addBook = createAsyncThunk('books/addBook', async ({ id, title, author }) => {
  const response = await axios.post(apiUrl, {
    item_id: id,
    title,
    author,
    category: 'religion',
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${apiUrl}${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return bookId;
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookIndex = state.books.findIndex((book) => book.id === action.payload);
        if (bookIndex !== -1) {
          const newBooks = [...state.books];
          newBooks.splice(bookIndex, 1);
          return {
            ...state,
            books: newBooks,
          };
        }
        return state;
      });
  },
});

export default booksSlice.reducer;
