
import { useContext, useState } from "react";
import DataContext from '../Datacontext'
import { Link } from "react-router-dom";
import RegisterButton from "./RegisterButton";
export default function ManageProducts(){
    const data = useContext(DataContext);
    let [search,setSearch] = useState('');

    return <div className="font-sans">
        <h1 className="text-[3rem] pl-10 pt-10">MENU MANAGE</h1>
        <div className="pl-10 pt-10 flex">
        <Link to={'/add'}>
        <RegisterButton content="ADD PRODUCT" className="m-0"/>
        </Link>
        <input required  className="w-[45%] rounded-md border p-2" placeholder="Product...." maxLength='40' value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        
        <table className="w-[90%]  font-sans ml-10 mt-6">
            <thead className=" text-[1.1rem] font-bold">
                <tr className=" h-[60px] ">
                    <td className="border-2 w-[60px] pl-3">id</td>
                    <td className="border-2 pl-3">name</td>
                    <td className="border-2 pl-3">price</td>
                    <td className="border-2 pl-3">discount</td>
             
                </tr>
            </thead>
            <tbody className="border-2">

        
        { data.map((d)=>{
            if(d.title.toUpperCase().startsWith(search.toUpperCase())){
                return <tr className="border-2">
                <td className="border-2 p-4 pl-3">
                    {d.id}
                </td>
                <td className="border-2 pl-3">
                    {d.title}
                </td>
                <td className="border-2 pl-3">
                    {d.price}
                </td>
                <td className="border-2 pl-3">
                    {d.discount!=0 ? d.discount+'%':'NON'}
                </td>
                <td className="border-2 pl-3">
                    <Link to={`/edit/${d.id}`}>
                    EDIT
                    </Link>

                </td>
                <td className="border-2 pl-3" onClick={()=>{
                    
                }}>
                    DELETE
                </td>
            </tr>
            }
            
        })}
            </tbody>

        </table>
        </div>
}