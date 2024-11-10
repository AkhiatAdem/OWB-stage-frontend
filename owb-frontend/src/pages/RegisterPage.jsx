import React, { useState } from 'react';
import Boutton from '../components/Boutton'; 

const Sign = () => {
  const [firstName, setFirstName] = useState('');
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('client');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log({ firstName, lastName, email, phone, city, password, userType });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige to-brown">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-brown mb-6">Inscription</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-brown">Prénom</label>
            <input 
              type="text" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block text-brown">Nom</label>
            <input 
              type="text" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
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
          <div>
            <label className="block text-brown">Type d'utilisateur</label>
            <select 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
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