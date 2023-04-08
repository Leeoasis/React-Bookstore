import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import ProgressBar from './progress';

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
      <ul className="btn-container">
        <li>
          <button className="Comments Remove" type="button">
            Comments
          </button>
        </li>
        <div className="Line-2" />
        <li>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
            className="Remove"
          >
            Remove
          </button>
        </li>
        <div className="Line-2" />
        <li>
          <button className="Edit Remove" type="button">
            Edit
          </button>
        </li>
      </ul>
      <div className="book-progress">
        <ProgressBar />
        <div className="progress-text">
          <p className="Percent-Complete">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="Completed">Completed</p>
        </div>
        <hr className="vertical-line" />
        <div className="chapters">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <p className="Current-Lesson">Chapter 12</p>
          <button type="button" className="Update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
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
