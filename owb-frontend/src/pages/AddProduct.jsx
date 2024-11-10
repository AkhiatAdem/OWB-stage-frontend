import { useState } from "react";


export default  function AddProduct(){

    let [product,setProduct] = useState({
        title:'',
        price:'',
        description:'',
        discount:'',
        img:''

    })

    return <>
    <h1 className="text-[3rem] text-center p-5">ADD PRODUCT</h1>
        <div className="flex flex-col w-[80vw] mx-auto border p-5"  >
            <h1 className="text-[1.2rem] pb-1 pt-5">Product Name</h1>
            <input required  className="w-[100%] border p-2" placeholder="EX: cheese burger..." maxLength='40' value={product.title} onChange={(e)=>{
                let temp = {...product};
                temp.title = e.target.value;
                setProduct(temp);
            }}
                />
            <h1 className="text-[1.2rem] pb-1 pt-5">Product Description</h1>
            <input required  className="w-[100%] border p-2" placeholder="EX: the best cheese burger u can have bla bla" maxLength='200'value={product.description} onChange={(e)=>{
                let temp = {...product};
                temp.description = e.target.value;
                setProduct(temp);
            }}/>
            <h1 className="text-[1.2rem] pb-1 pt-5">Original Price</h1>
            <input required type="number"  className="w-[100%] border p-2" placeholder="EX: 200..." value={product.price} onChange={(e)=>{
                let temp = {...product};
                temp.price = e.target.value;
                setProduct(temp);
            }}/>
            <h1 className="text-[1.2rem] pb-1 pt-5">Discount %</h1>
            <input required type="number"  className="w-[100%] border p-2" min={0} max={100} placeholder="EX: 200..." value={product.discount} onChange={(e)=>{
                let temp = {...product};
                temp.discount = e.target.value;
                setProduct(temp);
            }}/>
            <h1 className="text-[1.2rem] pb-1 pt-5">Image URl</h1>
            <div className="flex flex-row justify-between">
            <input required type="text"  className="w-[80%] border p-2" placeholder="EX: https;//asdsafa" value={product.img} onChange={(e)=>{
                let temp = {...product};
                temp.img = e.target.value;
                setProduct(temp);
            }}/>
            <div className={`h-[50px] border w-[100px] bg-cover`}
            style={{backgroundImage: product.img ? `url(${product.img})`: 'none'}}>

            </div>
            
            </div>

        <button className={`min-w-[%22] w-auto border border-[#593E2B] bg-[#593E2B] px-4 py-3 text-[1rem] tracking-wide text-[#FFFFFF] font-semibold uppercase rounded-lg  hover:bg-[#3d2a1d] transition-all duration-200 cursor-pointer mt-10 `} onClick={()=>{}}>ADD</button>
            
            
        </div>
    
    </>

}