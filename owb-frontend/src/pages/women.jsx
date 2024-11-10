import React from 'react';
import { useContext } from 'react';
import DataContext from '../Datacontext'
import ProductCard from '../components/ProductCard';



const Women = () => {
    let products = useContext(DataContext);
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Vêtements pour Femmes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <ProductCard products={products} type="femme"/>
            </div>
        </div>
    );
};

export default Women;