import React from 'react';
import Form from '../components/form';
import Header from '../components/Header';
import BookLists from '../components/list';

export default function Home() {
  return (
    <div className="Panel-bg">
      <Header />
      <BookLists />
      <Form />
    </div>
  );
}
