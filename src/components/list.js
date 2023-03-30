import React from 'react';
import Book from './book';

const BookLists = () => {
  const books = [
    {
      id: 1,
      title: 'The Case for Christ',
      author: 'Lee Strobel',
    },
    {
      id: 2,
      title: 'The Great Controversy',
      author: 'Ellen G White',
    },
    {
      id: 3,
      title: 'The Holy Bible',
      author: 'Various',
    },
    {
      id: 4,
      title: 'Exploring Thessalonians',
      author: 'George R Knight',
    },
    {
      id: 5,
      title: 'Food for thought',
      author: 'Ellen G White',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookLists;
