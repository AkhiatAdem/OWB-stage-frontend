


import { useContext, useState } from "react";
import DataContext from '../Datacontext'

export default function Stock(){
    const data = useContext(DataContext);
    let [search,setSearch] = useState('');
    let [temp,setTemp] = useState(data);
    return <div className="font-sans">
        <h1 className="text-[3rem] pl-10 pt-10">Stock</h1>
        <div className="pl-10 pt-10 flex">
        
        <input required  className="w-[45%] rounded-md border p-2" placeholder="Product...." maxLength='40' value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        
        <table className="w-[90%]  font-sans ml-10 mt-6">
            <thead className=" text-[1.1rem] font-bold">
                <tr className=" h-[60px] ">
                    <td className="border-2 w-[60px] pl-3">id</td>
                    <td className="border-2 pl-3">name</td>
                    <td className="border-2 pl-3">left in stock</td>
             
                </tr>
            </thead>
            <tbody className="border-2">

        
        {temp.map((d)=>{
            if(d.title.toUpperCase().startsWith(search.toUpperCase())){
                return <tr className={`border-2 ${d.stock == 0 ? "bg-red-200": ""}`}>
                <td className="border-2 p-4 pl-3">
                    {d.id}
                </td>
                <td className="border-2 pl-3">
                    {d.title}
                </td>
                <td className="border-2 pl-3">
                    {d.stock}
                </td>
                <td className="border-2 pl-3">
                    
                    ADD TO STOCK
                   

                </td>
            </tr>
            }
            
        })}
            </tbody>

        </table>
        </div>
}