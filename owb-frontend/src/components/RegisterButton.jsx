import { Link } from "react-router-dom";


export default function RegisterButton(props){


    return <button className={`w-[22%] border border-[#593E2B] bg-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#FFFFFF] font-semibold uppercase rounded-lg  hover:bg-[#3d2a1d] transition-all duration-200 cursor-pointer mx-4 ${props.className}`}> <Link to='/register'>{props.content}</Link></button>

}