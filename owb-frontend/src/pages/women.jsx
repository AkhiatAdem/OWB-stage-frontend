import React from 'react';

const products = [
    {
        id: 1,
        name: "Robe d'Été",
        description: "Une robe légère et fluide, parfaite pour les journées ensoleillées.",
        quantity: 25,
        price: 4500, // prix en dinars algériens
        imageUrl: "url_to_image_1.jpg",
    },
    {
        id: 2,
        name: "Blouse en Soie",
        description: "Blouse élégante en soie, idéale pour les occasions spéciales.",
        quantity: 15,
        price: 7000,
        imageUrl: "url_to_image_2.jpg",
    },
    {
        id: 3,
        name: "Jean Taille Haute",
        description: "Jean taille haute, confortable et tendance.",
        quantity: 30,
        price: 5500,
        imageUrl: "url_to_image_3.jpg",
    },
    {
        id: 4,
        name: "Veste en Jean",
        description: "Veste en jean classique, parfaite pour le printemps.",
        quantity: 20,
        price: 6000,
        imageUrl: "url_to_image_4.jpg",
    },
    // Ajoutez d'autres produits ici
];

const Women = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Vêtements pour Femmes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
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
    );
};

export default Women;