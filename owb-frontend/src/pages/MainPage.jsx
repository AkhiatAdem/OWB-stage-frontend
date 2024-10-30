import FloatingDesign from "../components/FloatingDesign"
import RegisterButton from "../components/RegisterButton"

export default function MainPage(){

    return <div>
        <FloatingDesign/>

        <div className="flex flex-col md:flex-row relative z-10">
            <div className="flex flex-col w-full md:w-[55vw] h-[calc(100vh-115px)] xl:pl-[10%] pt-[5%] gap-5 pl-[10%] md:pl-[2%]">
                <h1 className="xl:text-[4.2rem] md:text-[3.3rem] text-[2.8rem] font-bold text-[#593E2B]">THE BEST<br/> CLOTHING QUALITY<br/>IN ORAN</h1>
                <p className="xl:text-[1.2rem] md:text-[1.1rem] font-light text-[#73553f] xl:w-[80%] w-[90%]">lementum ex. In mollis felis molestie, vulputate vehicula orci. Sed eu ornare tellus, sed ultrices ipsum. Mauris sollicitudin magna ut mauris pulvinar pellentesque et</p>
                <RegisterButton className="w-[70%] mx-0" content="SIGN UP NOW"/>
            </div>
            <div className="hidden md:block aspect-square w-[45vw]  rounded-tl-full bg-[url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover  border-8 border-[#8d705c]">

            </div>
        </div>
    </div>
}