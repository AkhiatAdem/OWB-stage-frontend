import React, { useContext } from 'react';

import Tshirt from '../assets/Tshirt.webp'
import jeans from '../assets/jeans.jpg'
import veste from '../assets/veste.jpg'
import chemise from '../assets/chemise.webp'
import DataContext from '../Datacontext'
import ProductCard from '../components/ProductCard';



const Men = () => {
    let products = useContext(DataContext);
    return (
            <div className="p-10">
                <h1 className="text-[2.5rem] font-semibold text-[#593E2B] pb-5">Vêtements pour Hommes</h1>
                <hr className="w-full transition-all duration-300 ease-in-out group-hover:w-full border-t-4 border-[#796752] mb-5" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <ProductCard products={products} type="homme"/>
                </div>
            </div>
    );
};


export default Men;