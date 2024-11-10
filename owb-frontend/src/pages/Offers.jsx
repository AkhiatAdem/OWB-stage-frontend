import React from 'react';

const offers = [
    {
        id: 1,
        name: "Robe d'Été",
        description: "Robe légère en coton, idéale pour les journées chaudes.",
        originalPrice: 6000, // prix d'origine en dinars algériens
        salePrice: 3000, // prix soldé
        imageUrl: "url_to_image_1.jpg",
    },
    {
        id: 2,
        name: "T-shirt Basique",
        description: "T-shirt en coton doux, parfait pour un look décontracté.",
        originalPrice: 2500,
        salePrice: 1250,
        imageUrl: "url_to_image_2.jpg",
    },
    {
        id: 3,
        name: "Jean Slim Fit",
        description: "Jean slim fit, confortable et tendance.",
        originalPrice: 6000,
        salePrice: 4500,
        imageUrl: "url_to_image_3.jpg",
    },
    {
        id: 4,
        name: "Veste en Jean",
        description: "Veste en jean classique, parfaite pour le printemps.",
        originalPrice: 8000,
        salePrice: 5000,
        imageUrl: "url_to_image_4.jpg",
    },
    // Ajoutez d'autres offres ici
];

const BestOffers = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Meilleures Offres de Vêtements Soldés</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {offers.map((offer) => (
                    <div key={offer.id} className="border rounded-lg p-4 shadow-md">
                        <img src={offer.imageUrl} alt={offer.name} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-lg font-semibold mt-2">{offer.name}</h2>
                        <p className="text-md text-gray-700">{offer.description}</p>
                        <p className="text-md line-through text-red-600 mt-1">{offer.originalPrice} DZD</p>
                        <p className="text-md text-green-600 font-bold mt-1">{offer.salePrice} DZD</p>
                        <button className="mt-2 w-full bg-[#593E2B] text-white py-2 rounded-lg hover:bg-[#3d2a1d] transition">
                            Ajouter au Panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestOffers;