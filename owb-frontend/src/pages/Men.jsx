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
        <div>
           
            <div className="p-4">
                <h1 className="text-2xl font-bold">Vêtements pour Hommes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <ProductCard products={products} type="homme"/>
                </div>
            </div>
        </div>
    );
};


export default Men;