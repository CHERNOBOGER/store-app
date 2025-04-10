import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
};

export default App;