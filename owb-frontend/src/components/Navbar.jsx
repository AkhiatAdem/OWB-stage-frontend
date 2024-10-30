import { useState } from "react"
import { Link } from "react-router-dom";
import RegisterButton from "./RegisterButton";



export default function Navbar() {

    let [ismenuOpen,setMenuOpen] = useState(false);

    return <header className="flex flex-row relative h-[110px] w-[100vw] bg-[#CFB290] shadow-md border-b-2">
        <div className="flex md:flex-row flex-col justify-center w-[100vw] md:w-[33vw] items-center">
            <img src="logo.PNG" className="md:w-[150px] w-[100px] pb-3"/>
            <Link to='/'>  <h1 className="md:text-[1.7rem] text-[1.2rem]  font-bold tracking-widest  text-[#593E2B]">
               FitOran
            </h1></Link>

        </div>
        <div className="hidden md:flex md:flex-row w-[33vw] justify-evenly items-center ">
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70">
                    Best offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                
        </div>
        <div className="hidden md:flex md:flex-row w-[33vw] justify-center items-center">
               <RegisterButton content="Sign Up"/>
                <button className="w-[22%] border border-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#593E2B] font-semibold uppercase rounded-lg hover:bg-[#957f67] transition-all duration-200 cursor-pointer mx-4"><Link to='/login'>Login</Link></button>
        </div>
        <div className="absolute top-7 cursor-pointer hover:opacity-70 right-4 md:hidden z-30" onClick={()=>{setMenuOpen(!ismenuOpen)}}>
                <img src={ismenuOpen ? "icons/close.png" : 'icons/menu.png'} className="w-10" alt="" />
                
        </div>
        <div className={`md:hidden w-[100vw] h-[100vh] transition-all duration-300 ease-in-out bg-[#CFB290] bg-opacity-70 flex flex-col items-center absolute left-0 top-0 pt-10 gap-7 justify-center z-20 ${ismenuOpen ? 'translate-x-0 ': 'translate-x-[100vw]'} `}>
            <h1 className=" text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70"  onClick={()=>{setMenuOpen(!ismenuOpen)}}>
                    Men
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70" onClick={()=>{setMenuOpen(!ismenuOpen)}}>
                    women
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70" onClick={()=>{setMenuOpen(!ismenuOpen)}}>
                    Kids
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <h1 className="text-[1.1rem] tracking-wide text-[#593E2B] font-semibold uppercase group cursor-pointer hover:opacity-70" onClick={()=>{setMenuOpen(!ismenuOpen)}}>
                    Best offers
                    <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-[#593E2B]"></hr>
                </h1>
                <button className="w-[22%] border border-[#593E2B] bg-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#CFB290] font-semibold uppercase rounded-lg  hover:bg-[#3d2a1d] transition-all duration-200 cursor-pointer mx-4" onClick={()=>{setMenuOpen(!ismenuOpen)}}> <Link to='/register'>Sign Up</Link></button>
                <button className="w-[22%] border border-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#593E2B] font-semibold uppercase rounded-lg hover:bg-[#957f67] transition-all duration-200 cursor-pointer mx-4" onClick={()=>{setMenuOpen(!ismenuOpen)}}><Link to='/login'>Login</Link></button>

        </div>

    </header>
}