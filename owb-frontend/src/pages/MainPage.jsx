import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-beige to-brown min-h-screen flex flex-col items-center">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-white">Bienvenue sur notre Boutique</h1>
        <p className="mt-4 text-lg text-white">
          Découvrez nos offres exceptionnelles et profitez d'une expérience d'achat inoubliable !
        </p>
        <div className="mt-6">
          <Link to="/register" className="inline-block bg-white text-brown rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition mb-4">
            Inscrivez-vous dès maintenant
          </Link>
          <Link to="/login" className="inline-block bg-transparent border-2 border-white text-white rounded-full px-6 py-3 hover:bg-white hover:text-brown transition">
            Connexion
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-brown mb-4">À propos de notre boutique</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Nous nous engageons à offrir la meilleure qualité de produits et un service client exceptionnel. 
            Explorez notre boutique pour découvrir des articles choisis avec soin pour répondre à vos besoins.
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default Home;