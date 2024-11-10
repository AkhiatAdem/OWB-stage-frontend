import React from 'react';
import { useContext } from 'react';
import DataContext from '../Datacontext'
import ProductCard from '../components/ProductCard';



const Children = () => {
    let products = useContext(DataContext);
    return (
        <div className="p-10">
                <h1 className="text-[2.5rem] font-semibold text-[#593E2B] pb-5">Vêtements pour Enfants</h1>
                <hr className="w-full transition-all duration-300 ease-in-out group-hover:w-full border-t-4 border-[#796752] mb-5" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <ProductCard products={products} type="enfant"/>
                </div>
        </div>
    );
};

export default Children;