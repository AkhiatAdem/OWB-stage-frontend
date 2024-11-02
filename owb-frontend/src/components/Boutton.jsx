
import React from 'react';

const Boutton = ({ onClick, type, children, className }) => {
  return (
    <boutton 
      type={type} 
      onClick={onClick} 
      className={`flex items-center justify-center w-full bg-brown text-white rounded p-3 hover:bg-brown-dark transition duration-200 ${className}`}
    >
      {children}
    </boutton>
  );
};

export default Boutton;