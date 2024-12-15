import Image from "next/image"
import Button from "./button"


function Header() {
    
   

  return (
    <div className="bg-[#043873] w-[1920px] h-[92px] text-white flex  justify-between px-[220px] py-4 items-center  " >
        <div> 
            <Image src="/images/logo.png" alt="logo-pic" width={191} height={34} />
         </div>
        <div className="flex gap-14 w-[735px] " > 
             <div className=" flex items-center w-[549px] " >
                <ul className="flex gap-14 items-center " >
                    <li>Products</li>
                    <li>Solutions </li>
                    <li>Resource</li>
                    <li>Pricing </li>
                </ul>
             </div>
             <div >
                 <Button btntext="Login" />
             </div>
         </div>      
    </div>
  )
}

export default Header
