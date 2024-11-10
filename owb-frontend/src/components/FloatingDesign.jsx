

export default function FloatingDesign(){

    return <div className="absolute w-full h-[calc(100vh-110px)] overflow-hidden z-0 hidden md:block">
   
    <div className="absolute top-0 left-0 w-24 h-24 bg-[#593E2B] rounded-full opacity-50 animate-float"></div>
    <div className="absolute top-20 left-10 w-32 h-32 bg-[#6C4D37] rounded-full opacity-30 animate-float"></div>
    <div className="absolute top-40 left-[50%] w-40 h-40 bg-[#73553F] rounded-full opacity-40 animate-float"></div>
    <div className="absolute bottom-10 left-20 w-28 h-28 bg-[#5C3D2C] rounded-full opacity-20 animate-float"></div>
    <div className="absolute bottom-5 left-[35%] w-36 h-36 bg-[#6D4A38] rounded-full opacity-60 animate-float"></div>

  </div>
}