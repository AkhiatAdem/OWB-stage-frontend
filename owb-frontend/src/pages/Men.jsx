import React from 'react';
import Header from '../components/Header';
import Tshirt from '../assets/Tshirt.webp'
import jeans from '../assets/jeans.jpg'
import veste from '../assets/veste.jpg'
import chemise from '../assets/chemise.webp'

const products = [
    {
        id: 1,
        name: "T-shirt Classique",
        description: "Un t-shirt en coton doux, parfait pour un look décontracté.",
        quantity: 50,
        price: 3500,
        imageUrl: Tshirt,
    },
    {
        id: 2,
        name: "Jeans Slim Fit",
        description: "Jeans slim fit en denim, confortable et élégant.",
        quantity: 30,
        price: 6000,
        imageUrl: jeans,
    },
    {
        id: 3,
        name: "Veste en Cuir",
        description: "Veste en cuir véritable, idéale pour les soirées fraîches.",
        quantity: 20,
        price: 12000,
        imageUrl: veste,
    },
    {
        id: 4,
        name: "Chemise à Carreaux",
        description: "Chemise à carreaux en flanelle, parfaite pour un style décontracté.",
        quantity: 40,
        price: 4500,
        imageUrl: chemise,
    },
];

const Men = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-bold">Vêtements pour Hommes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="w-full h-[400px] object-cover rounded-md" // Ajustez la hauteur
                            />
                            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                            <p className="text-md text-gray-700">{product.description}</p>
                            <p className="text-md font-bold mt-1">{product.quantity} en stock</p>
                            <p className="text-md text-green-600 mt-1">{product.price} DZD</p>
                            <button className="mt-2 w-full bg-[#593E2B] text-white py-2 rounded-lg hover:bg-[#3d2a1d] transition">
                                Ajouter au Panier
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Men;