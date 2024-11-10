import React, { useState } from 'react';
import Boutton from '../components/Boutton'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password});
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-110px)] bg-gradient-to-r from-beige to-brown ">
      <div className=" w-[50%] p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-brown mb-6">Connexion</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-brown">Nom d'utilisateur</label>
            <input 
              type="text" 
              className="border border-brown rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-brown" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
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
          
          <div className="flex justify-center">
          <Boutton type="submit">Se connecter</Boutton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;