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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
