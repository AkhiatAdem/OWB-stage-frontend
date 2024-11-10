import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Assurez-vous que le chemin est correct

const Footer = () => {
  return (
    <footer className="bg-brown text-beige p-6">
      <div className="container mx-auto flex flex-col items-center">

        {/* Section de description centrée */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo de la Boutique" className="h-10 mb-2" />
          <p className="text-center">
            Boutique en ligne proposant les meilleures sélections de vêtements pour toute la famille. 
            Découvrez nos offres exceptionnelles !
          </p>
        </div>

        {/* Section des contacts */}
        <div className="mb-6 w-full text-center">
          <h3 className="font-bold mb-2 text-brown-darkest">Contacts</h3>
          <p>Email: contact@boutique.com</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
        </div>

        {/* Section des réseaux sociaux */}
        <div className="mb-6 w-full text-center">
          <h3 className="font-bold mb-2 text-brown-darkest">Suivez-nous</h3>
          <div className="flex justify-center space-x-4">
            <Link to="#" className="text-beige hover:text-white">Facebook</Link>
            <Link to="#" className="text-beige hover:text-white">Instagram</Link>
            <Link to="#" className="text-beige hover:text-white">Twitter</Link>
          </div>
        </div>

        {/* Section d'emplacement avec la carte */}
        <div className="flex flex-col items-center mb-6 w-full">
          <h3 className="font-bold mb-2 text-brown-darkest">Notre emplacement</h3>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509759!2d144.9537353153163!3d-37.81627997975117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b6c3%3A0x5045675218cee50!2sYour%20Shop%20Name!5e0!3m2!1sen!2sau!4v1628232286379!5m2!1sen!2sau"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Notre emplacement"
            ></iframe>
          </div>
        </div>
      </div>

      <p className="text-center mt-4">&copy; 2024 Boutique en ligne. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;