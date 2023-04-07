import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="Lesson-Panel">
      <p key={book.id}>
        <strong className="Title">{book.title}</strong>
        <br />
        {' '}
        {' '}
        <strong className="author">{book.author}</strong>
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
        className="Remove"
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
