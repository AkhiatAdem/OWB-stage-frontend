
import { Link , Outlet } from "react-router-dom"
export default function Dashboard(){


    return <>
    <div className="flex flex-row text-[#593E2B]">
        
        <div className="sticky top-0 w-[20vw] h-[100vh] border-r-2 flex flex-col pl-5 pt-10 pr-2">
             <h1 className="text-[2rem] bold border-b-2 mb-10">
                Dashboard
             </h1>
             <Link to='menu'>
                <h1 className="text-[1.7rem] border-b-2 pb-6 pt-6 hover:opacity-70 cursor-pointer">Menu</h1>
             </Link>
             <Link to='orders'>
                <h1 className="text-[1.7rem] border-b-2 pb-6 pt-6 hover:opacity-70 cursor-pointer">Orders</h1>
             </Link>
             <Link to='stock'>
                <h1 className="text-[1.7rem] border-b-2 pb-6 pt-6  hover:opacity-70 cursor-pointer">Stock</h1>
             </Link>
        </div>
        
        <div className=" w-[80vw] h-[200vh]">
           <Outlet/>
        </div>
    </div>
    </>
}