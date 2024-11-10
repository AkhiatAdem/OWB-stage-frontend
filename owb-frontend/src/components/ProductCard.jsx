

export default function ProductCard(props){



    return <>
    {
    props.products.map((product) => {
        if(props.type == product.type){
            return <div key={product.title} className="border rounded-lg p-4 shadow-md">
            <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-[400px] object-cover rounded-md" // Ajustez la hauteur
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-md text-gray-700">{product.description}</p>
            <p className="text-md font-bold mt-1">{product.stock} en stock</p>
            <p className="text-md text-green-600 mt-1">{product.price} DZD</p>
            <button className="mt-2 w-full bg-[#593E2B] text-white py-2 rounded-lg hover:bg-[#3d2a1d] transition">
                Ajouter au Panier
            </button>
        </div>
        }
                        
})}
    </>
}