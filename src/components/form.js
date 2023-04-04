import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ title: '', author: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const book = { id, ...inputs };
    dispatch(addBook(book));
    setInputs({ title: '', author: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={inputs.author}
        onChange={handleInputChange}
        placeholder="Author"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
