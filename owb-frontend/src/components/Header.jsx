import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cartIcon.png';
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-[#593E2B] text-white">
          <img src="logo.PNG" className="md:w-[150px] w-[100px] pb-3" alt="Logo" />
            <div className="text-2xl font-bold">
                <Link to="/">OWB</Link>
            </div>
            <nav className="space-x-4">
                <Link to="/men" className="hover:text-[#CFB290]"> Hommes</Link>
                <Link to="/women" className="hover:text-[#CFB290]"> Femmes</Link>
                <Link to="/children" className="hover:text-[#CFB290]">Enfants</Link>
                <Link to="/offers" className="hover:text-[#CFB290]">Meilleures Offres</Link>
            </nav>
            <div className='flex items-center'>
                <Link to="/cart" className="hover:text-[#CFB290]">
                    <img src={cartIcon} alt="Panier" className="h-8" />
                </Link>
            </div>
        </header>
    );
};

export default Header;