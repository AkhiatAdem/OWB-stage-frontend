import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Men from './pages/Men';
import Women from './pages/women'; 
import Kids from './pages/Kids';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/product-details" element={<ProductDetails />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;