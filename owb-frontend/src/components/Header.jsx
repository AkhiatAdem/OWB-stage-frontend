import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import Navbar from '../components/Navbar';
const Header = () => {
  return (
<<<<<<< HEAD
    <header className="bg-beige text-brown p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo de la Boutique" className="h-10 mr-2" />
          <span className="text-2xl font-bold">Boutique</span>
        </Link>
        
      </nav>
      <NavBar/>
    </header>
=======
    <></>
>>>>>>> main
  );
};

export default Header;