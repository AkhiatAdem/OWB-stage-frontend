import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Importez seulement App
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Importez Navbar ici
import MainPage from './pages/MainPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Men from './pages/Men';
import Women from './pages/women';
import Kids from './pages/Kids';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     
      <Navbar/>
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
    <App /> {/* Rendre seulement App ici, qui gère déjà le Router */}
  </StrictMode>,
);