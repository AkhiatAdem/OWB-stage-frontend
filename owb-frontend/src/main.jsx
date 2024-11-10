import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Importez seulement App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Rendre seulement App ici, qui gère déjà le Router */}
  </StrictMode>,
);