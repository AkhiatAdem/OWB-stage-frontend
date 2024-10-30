import { useState } from "react"



export default function Navbar() {

    let [ismenuOpen,setMenuOpen] = useState(false);

    return <header className="flex flex-row relative h-[100px] w-[100vw] bg-[#CFB290] shadow-md border-b-2">
        <div className="flex md:flex-row flex-col justify-center w-[100vw] md:w-[33vw] items-center">
            <img src="logo.PNG" className="md:w-[150px] w-[100px] pb-3"/>
            <h1 className="md:text-[1.7rem] text-[1.2rem]  font-bold tracking-widest  text-[#593E2B]">
                FitOran
            </h1>

        </div>
        <div className="hidden md:flex md:flex-row w-[33vw] justify-evenly items-center ">
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Best offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                
        </div>
        <div className="hidden md:flex md:flex-row w-[33vw] justify-evenly">

        </div>
        <div className="absolute top-4 right-4 md:hidden z-10">
                <h1 onClick={()=>setMenuOpen(!ismenuOpen)}>
                    {
                      ismenuOpen ? "close menu" : "open menu" 
                    }
                    
                </h1>
        </div>
        <div className={`md:hidden w-[100vw] h-[100vh] transition-all duration-300 ease-in-out bg-[#CFB290] bg-opacity-70 flex flex-col items-center absolute left-0 top-0 pt-10 justify-center z-0 ${ismenuOpen ? 'translate-x-0 ': 'translate-x-[100vw]'} `}>
            <h1 className=" text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.3rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Best offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
        </div>

    </header>
}