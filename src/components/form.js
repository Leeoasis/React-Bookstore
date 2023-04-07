import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const category = 'religion';
    await dispatch(addBook({
      id, title, author, category,
    }));
    event.target.reset();
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Line" />
      <h3 className="addTitle Text-Style-10">
        ADD NEW BOOK
      </h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="book-input"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="author-input"
        required
      />
      <button type="submit" className="Rectangle-2">Add Book</button>
    </form>
  );
};

export default AddBook;
