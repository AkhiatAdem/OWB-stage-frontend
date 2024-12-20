


export default function RegisterButton(props){


    return <button className={`min-w-[%22] w-auto border border-[#593E2B] bg-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-white font-semibold uppercase rounded-lg  hover:bg-[#3d2a1d] transition-all duration-200 cursor-pointer mx-4 ${props.className}`} onClick={props.onClick}>{props.content}</button>

}