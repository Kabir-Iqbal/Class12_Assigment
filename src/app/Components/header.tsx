"use client"
import Image from "next/image"
import Button from "./button"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



function Header() {
   
    const [isOpen , setIsOpen] = useState(false);
    
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
   

  return (
    <div className="Container w-[100%] mx-auto max-w-[1920px] z-10 overflow-hidden  " >
    <div className="bg-[#043873] w-full   h-[92px]  flex justify-between gap-10  text-white px-[25px] sm:px-[50px] md:px-[70px] lg:px-[90px] 2xl:px-[220px] py-4 items-center  " >
        <div > 
            <Image className="w-[120px] object-cover    h-[20px] md:w-[180px] lg:w-[190px]  2xl:w-[191px] md:h-[34px] ] " src="/images/Logo.png" alt="Logo-pic" width={80} height={34} />
         </div>
        <div className="flex  gap-6 lg:gap-10  2xl:gap-14   2xl:w-[735px] py-0 px-0 " > 
             <div className=" flex items-center text-white  2xl:w-[549px] cursor-pointer z-10 overflow-hidden " >
                <ul className={`flex flex-col absolute  transition-all duration-500 gap-5  top-[-29px] opacity-0 md:opacity-100 pointer-events-none h-svh bg-[#4F9CF9] py-64 w-[55%]        md:flex-row md:static md:bg-[#043873] md:h-0 md:p-0 md:gap-7 lg:gap-14 items-center ${isOpen? "opacity-100 pointer-events-auto right-0 " : "right-[-100%] " }  `} >
                    <li>Products</li>
                    <li>Solutions </li>
                    <li>Resource</li>
                    <li>Pricing </li>
                </ul>
             </div>
             <div className="flex gap-5 items-center z-10 " >
                 <Button btntext="Login" />
                 <div className="flex text-4xl gap-5 md:hidden " >
                {!isOpen ?
                 <FaBars onClick={toggle} />
                 :
                 <IoMdClose onClick={toggle} />
                }
                 </div>
             </div>
         </div>      
    </div>
    </div>
  )
}

export default Header
