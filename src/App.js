import './styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Routes/Home';
import Categories from './Routes/Categories';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
