import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterButton from "./Boutton";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-row relative h-[110px] w-full bg-[#CFB290] shadow-md border-b-2">
            <div className="flex md:flex-row flex-col justify-center w-full md:w-[33vw] items-center">
                <img src="logo.PNG" className="md:w-[150px] w-[100px] pb-3" alt="Logo" />
                <Link to="/">
                    <h1 className="md:text-[1.7rem] text-[1.2rem] font-bold tracking-widest text-[#593E2B]">
                        OWB 
                    </h1>
                </Link>
            </div>

            <nav className="hidden md:flex md:flex-row w-[33vw] justify-evenly items-center">
                <Link to="/men" className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/women" className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/kids" className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/offers" className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Best Offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
            </nav>

            <div className="hidden md:flex md:flex-row w-[33vw] justify-center items-center">
                <RegisterButton content="Sign Up" />
                <Link to="/login">
                    <button className="w-[22%] border border-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#593E2B] font-semibold uppercase rounded-lg hover:bg-[#957f67] transition-all duration-200 cursor-pointer mx-4">
                        Login
                    </button>
                </Link>
            </div>

            <div 
                className="absolute top-7 cursor-pointer hover:opacity-70 right-4 md:hidden z-30" 
                onClick={() => setMenuOpen(!isMenuOpen)}
            >
                <img src={isMenuOpen ? "icons/close.png" : 'icons/menu.png'} className="w-10" alt="Menu Icon" />
            </div>

            <div 
                className={`md:hidden w-full h-full transition-all duration-300 ease-in-out bg-[#CFB290] bg-opacity-70 flex flex-col items-center absolute left-0 top-0 pt-10 gap-7 justify-center z-20 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <Link to="/men" onClick={() => setMenuOpen(false)} className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/women" onClick={() => setMenuOpen(false)} className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/kids" onClick={() => setMenuOpen(false)} className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/offers" onClick={() => setMenuOpen(false)} className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Best Offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]" />
                </Link>
                <Link to="/register">
                    <button className="w-[22%] border border-[#593E2B] bg-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#CFB290] font-semibold uppercase rounded-lg hover:bg-[#3d2a1d] transition-all duration-200 cursor-pointer mx-4">
                        Sign Up
                    </button>
                </Link>
                <Link to="/login">
                    <button className="w-[22%] border border-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#593E2B] font-semibold uppercase rounded-lg hover:bg-[#957f67] transition-all duration-200 cursor-pointer mx-4">
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
}