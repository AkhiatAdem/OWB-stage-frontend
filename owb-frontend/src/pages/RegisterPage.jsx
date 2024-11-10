import React, { useState } from 'react';
import Boutton from '../components/Boutton'; 

const Sign = () => {
  
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log({ userName, email, phone, city, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige to-brown p-10">
      <div className="w-[50%] p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-brown mb-6">Inscription</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-brown">Nom d'utilisateur</label>
            <input 
              type="text" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={userName} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
  
          <div>
            <label className="block text-brown">Email</label>
            <input 
              type="email" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block text-brown">Numéro de téléphone</label>
            <input 
              type="tel" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block text-brown">Ville</label>
            <input 
              type="text" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block text-brown">Mot de passe</label>
            <input 
              type="password" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block text-brown">Confirmer le mot de passe</label>
            <input 
              type="password" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
      
          <div className="flex justify-center">
          <Boutton type="submit">S'inscrire</Boutton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;