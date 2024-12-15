import Image from "next/image"

function Footer() {
  return (
    <div className="w-[1920px] h-[416px] top-[3626px] py-[140px] px-[220px] bg-[#043873]  " >
        <div className="flex gap-[100px] font-inter text-white " >
            <div className="w-[295px] h-[169px] flex flex-col gap-[15px] " >
                <Image src="/images/logo.png" width={191} height={34} alt="logo image" />
                <p className="text-[18px] leading-[30px] text-[#F7F7EE] " >whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>

            <div className="flex flex-col gap-[15px] w-[295px] " >
                <p className="font-bold text-[18px] leading-[21.78px] " >Product</p>
                <ul className="text-[#FFFFFF] text-[16px] gap-[15px] flex flex-col " >
                    <li className="text-[#FFE492] " >Overview</li>
                    <li>Pricing</li>
                    <li>Customer</li>
                </ul>
            </div>

            
            <div className="flex flex-col gap-[15px] w-[295px] " >
                <p className="font-bold text-[18px] leading-[21.78px] " >Resources</p>
                <ul className="text-[#FFFFFF] text-[16px] gap-[15px] flex flex-col " >
                    <li>Blog</li>
                    <li>tutorials</li>
                    <li>Help center</li>
                </ul>
            </div>
        

            <div className="flex flex-col gap-[15px] w-[295px] " >
                <p >Company</p>
                <ul className="text-[#FFFFFF] text-[16px] gap-[15px] flex flex-col " >
                    <li className="text-[#FFE492] " >About us</li>
                    <li>Careers </li>
                    <li>Media kit</li>
                </ul>
            </div>

        </div>
               
    </div>
  )
}

export default Footer
