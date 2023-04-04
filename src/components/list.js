import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const BookLists = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookLists;
