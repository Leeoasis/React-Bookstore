import './styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Routes/Home';
import Categories from './Routes/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
