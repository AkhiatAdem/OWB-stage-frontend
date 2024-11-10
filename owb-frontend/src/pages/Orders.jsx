import { useState } from "react"
import RegisterButton from "../components/RegisterButton"
import { Link } from "react-router-dom"
export default function Orders(){

    let [table,setTable] = useState('in wait') 

    let data = [
        {
            userid: 1,
            productid: 1,
            state: "confirmed",
            productname: "T-shirt",
            size: "XL"
        },
        {
            userid: 2,
            productid: 2,
            state: "in wait",
            productname: "Hoodie",
            size: "M"
        },
        {
            userid: 3,
            productid: 3,
            state: "rejected",
            productname: "Jeans",
            size: "L"
        },
        {
            userid: 4,
            productid: 4,
            state: "confirmed",
            productname: "Jacket",
            size: "S"
        },
        {
            userid: 5,
            productid: 5,
            state: "in wait",
            productname: "Sneakers",
            size: "9"
        },
        {
            userid: 6,
            productid: 6,
            state: "rejected",
            productname: "Hat",
            size: "One Size"
        },
        {
            userid: 7,
            productid: 7,
            state: "confirmed",
            productname: "Scarf",
            size: "One Size"
        },
        {
            userid: 8,
            productid: 8,
            state: "in wait",
            productname: "Gloves",
            size: "L"
        },
        {
            userid: 9,
            productid: 9,
            state: "rejected",
            productname: "Sweater",
            size: "M"
        },
        {
            userid: 10,
            productid: 10,
            state: "confirmed",
            productname: "Backpack",
            size: "One Size"
        },
        {
            userid: 11,
            productid: 11,
            state: "in wait",
            productname: "Sunglasses",
            size: "One Size"
        },
        {
            userid: 12,
            productid: 12,
            state: "rejected",
            productname: "Watch",
            size: "One Size"
        },
        {
            userid: 13,
            productid: 13,
            state: "confirmed",
            productname: "Boots",
            size: "9"
        },
        {
            userid: 14,
            productid: 14,
            state: "in wait",
            productname: "Shirt",
            size: "L"
        },
        {
            userid: 15,
            productid: 15,
            state: "rejected",
            productname: "Sweatpants",
            size: "M"
        },
        {
            userid: 16,
            productid: 16,
            state: "confirmed",
            productname: "Cap",
            size: "One Size"
        },
        {
            userid: 17,
            productid: 17,
            state: "in wait",
            productname: "Belt",
            size: "One Size"
        },
        {
            userid: 18,
            productid: 18,
            state: "rejected",
            productname: "Tote Bag",
            size: "One Size"
        },
        {
            userid: 19,
            productid: 19,
            state: "confirmed",
            productname: "Shorts",
            size: "M"
        },
        {
            userid: 20,
            productid: 20,
            state: "in wait",
            productname: "Sweater",
            size: "L"
        },
        {
            userid: 21,
            productid: 21,
            state: "rejected",
            productname: "Shirt",
            size: "XL"
        },
        {
            userid: 22,
            productid: 22,
            state: "confirmed",
            productname: "Raincoat",
            size: "M"
        },
        {
            userid: 23,
            productid: 23,
            state: "in wait",
            productname: "Laptop Bag",
            size: "One Size"
        },
        {
            userid: 24,
            productid: 24,
            state: "rejected",
            productname: "Laptop Sleeve",
            size: "One Size"
        },
        {
            userid: 25,
            productid: 25,
            state: "confirmed",
            productname: "Sports Shoes",
            size: "10"
        },
        {
            userid: 26,
            productid: 26,
            state: "in wait",
            productname: "Laptop",
            size: "One Size"
        },
        {
            userid: 27,
            productid: 27,
            state: "rejected",
            productname: "Phone Case",
            size: "One Size"
        },
        {
            userid: 28,
            productid: 28,
            state: "confirmed",
            productname: "Water Bottle",
            size: "One Size"
        },
        {
            userid: 29,
            productid: 29,
            state: "in wait",
            productname: "Gym Bag",
            size: "One Size"
        },
        {
            userid: 30,
            productid: 30,
            state: "rejected",
            productname: "Keychain",
            size: "One Size"
        }
    ];
    
    
    return <>
    <div className="font-sans">
        <h1 className="text-[3rem] pl-10 pt-10">ORDERS</h1>
        <div className="pl-10 pt-10 flex">
        <RegisterButton content="IN WAIT" className={`m-0 ${table == 'in wait' ? 'bg-black' : ""}`} onClick={()=>setTable('in wait')}/>
        <RegisterButton content="CONFIRMED" className={`m-0 ${table == 'confirmed' ? 'bg-black' : ""}`} onClick={()=>setTable('confirmed')}/>
        <RegisterButton content="REJECTED" className={`m-0 ${table == 'rejected' ? 'bg-black' : ""}`} onClick={()=>setTable('rejected')}/>


        
        </div>
        
        <table className="w-[90%]  font-sans ml-10 mt-6">
            <thead className=" text-[1.1rem] font-bold">
                <tr className=" h-[60px] ">
                    <td className="border-2  w-auto pl-3">user id</td>
                    <td className="border-2 pl-3">product id</td>
                    <td className="border-2 pl-3">product name</td>
                    <td className="border-2 pl-3">size</td>
             
                </tr>
            </thead>
            <tbody className="border-2">

        
        { data.map((d)=>{
            if(d.state == table){
                return <tr className="border-2">
                <td className="border-2 p-4 pl-3">
                    {d.userid}
                </td>
                <td className="border-2 pl-3">
                    {d.productid}
                </td>
                <td className="border-2 pl-3">
                    {d.productname}
                </td>
                <td className="border-2 pl-3">
                    {d.size}
                </td>
                <td className={`border-2 pl-3 ${table == 'in wait' ? "":'hidden'}`}> 
                    CONFIRM
                </td>
                <td className={`border-2 pl-3 ${table == 'in wait' ? "":'hidden'}`} onClick={()=>{
                }}>
                    REJECT
                </td>
            </tr>
            }   
        })}
            </tbody>

        </table>
        </div>
    </>
}