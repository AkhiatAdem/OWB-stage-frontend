

export default function ProductCard(props){



    return <>
    {
    props.products.map((product) => {
        if(props.type == product.type){
            return <div key={product.title} className="border rounded-lg p-4 shadow-md relative">
            <img 
                src={product.img} 
                alt={product.title} 
                className="w-full aspect-square object-cover rounded-md mb-5" 
            />
            <h2 className="text-[1.5rem] font-semibold mt-2 text-[#593E2B]">{product.title}</h2>
            <p className="text-md text-gray-700">{ product.description.slice(0,45)}...</p>
            <p className="text-md font-bold mt-1">{product.stock} en stock</p>
            <p className="text-md text-green-600 mt-1">{product.price} DZD</p>
            <button className="mt-2 w-full  bg-[#593E2B] text-white py-2 rounded-lg hover:bg-[#3d2a1d] transition">
                Ajouter au Panier
            </button>
        </div>
        }
                        
})}
    </>
}