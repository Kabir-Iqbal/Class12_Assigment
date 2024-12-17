import Header from "./Components/header"
import "@fontsource/inter"
import Image from "next/image"
import Footer from "./Components/footer"




function Page() {
  return (
    <div className="Container  mx-auto w-[100%]  max-w-[1920px]  " >
      {/* header */}
      <Header />
      {/*Hero section  */}
      <div className="w-full h-[829px] py-[80px] px-[20px] md:py-[90px] md:px-[80px] lg-py-[110px] lg:px-[120px] 2xl:py-[140px]  2xl:px-[220px] bg-[#043873] text-white flex flex-col md:flex-row top-[140px] " >

        {/* left */}
        <div className="flex flex-col md:flex-1  2xl:w-[656px] h-[361px] gap-5 md:gap-7 lg:gap-10 2xl:gap-14 font-inter font-semibold my-auto  " >
          <h1 className=" text-[30px] md:text-[40px] lg:text-[50px] lg:leading-[65px] 2xl:text-[64px] leading-[35px] md:leading-[50px] 2xl:leading-[77.45px] " >Get More Done with whitepace</h1>
          <p className="text-lg font-normal " >Project management software that enables your teams to collaborate, plan, analyze
            and manage everyday tasks</p>

          <div className=" sm:w-[219px] sm:h-[63px] rounded-lg px-3 py-3 md:p-5 bg-[#4F9CF9] text-center " >
            <button>Try Whitepace free</button>
          </div>
        </div>

        {/* right */}
        <div className=" w-[88%] mx-auto h-[300px] md:flex-1 2xl:w-[824px] md:my-auto md:h-[65%] lg:[98%] 2xl:h-[549px] bg-[#C4DEFD] gap-1 " > 
        </div>
      </div>

      {/* second page */}
      <div className="w-full h-[1588px]  py-[80px] px-[20px] md:py-[90px] md:px-[80px] lg:py-[110px] lg-px-[120px] 2xl:py-[140px]  2xl:px-[220px] flex flex-col md:gap-[50px] gap-[100px]   " >
        {/* first section */}
        <div className=" md:w-[100%] md:mx-auto 2xl:w-[1480px] h-[547px] flex flex-col md:flex-row gap-[25px] md:gap-[60px] " >
          {/*left  */}
          <div className="flex flex-col md:flex-1 2xl:w-[672px] h-[411px] gap-5 md:gap-[30px] md:my-auto lg:gap-[60px] my-auto  " >
            <h1 className=" text-[30px] leading-[30px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[65px] 2xl:leading-[77.45px] 2xl:text-[64px] " >Project Management</h1>
            <p className=" text-[16px] leading-[20px]   md:text-[18px] md:leading-[25px] lg:leading-[30px] " >Images, videos, PDFs and audio files are supported.
              Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

            <div className="bg-[#4F9CF9] px-4 py-3 w-[40%] md:py-5 md:px-10 md:h-[63px] md:w-[201px] text-center " >
              <button>Get Started </button>
            </div>
          </div>
          {/* right */}
          <div className=" w-[85%] mx-auto md:flex-1 lg:w-[748px] h-[547px] bg-[#C4DEFD] " ></div>
        </div>

        {/* Second section */}

        <div className=" 2xl:w-[1480px] my-auto h-fit  2xl:h-[661px] gap-[100px] flex flex-col lg:flex-row  " >
          <div>
            <Image className="w-[80%] mx-auto lg:w-[710px] md:h-[610px] " src="/images/balsimg.png" width={710} height={610} alt="Bals Image" />
          </div>
          <div className="font-inter w-[100%] lg:w-[670px] lg:h-[294px] gap-5 md:gap-7 lg:gap-[60px] flex flex-col my-auto " >
            <h1 className="text-[30px] leading-[30px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[65px] 2xl:leading-[77.45px] 2xl:text-[64px] font-bold  " >Work together</h1>
            <p className=" text-[16px] leading-[25px] md:text-[18px] md:leading-[30px] " >With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>

            <div className="bg-[#4F9CF9] py-3 px-4 md:py-4 lg:py-5 md:px-10 flex w-[186px]   justify-center " >
              <button type="button" >Try it now </button>
            </div>
          </div>

        </div>
      </div>

      {/* Third page */}
      <div className=" w-full  my-20 h-[574px] bg-[#043873] top-[2513px] py-[80px] px-[30px] md:py-[120px] md:[px-80] lg:py-[130px] lg:px-[120px] 2xl:py-[140px] 2xl:px-[220px] text-white " >
        <div className=" lg::w-[1481px] lg:h-[294px] gap-5 md:gap-[60px] mx-auto font-inter flex flex-col text-center " >
          <h1 className="text-[30px] leading-[45px] md:text-[40px] md:leading-[60px] lg:text-[72px] lg:leading-[87.14px] font-bold  " >Your work, everywhere you are</h1>
          <p className=" text-[16px] leading-[25px] md:text-[18px] md:leading-[30px] font-normal  " >Access your notes from your computer, phone or tablet by synchronising with various services,
            including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and
            iOS. A terminal app is also available!</p>

          <div className="bg-[#4F9CF9] w-[195px] md:h-[63px] text-center py-3 px-8 mt-3 md:mt-0 md:py-5 md:px-10 mx-auto  " >
            <button type="button" > Try Taskey </button>
          </div>
        </div>
      </div>

      {/*Sponser Page */}
      <div className="w-full md:h-[538px] top-[3078px] px-[30px] py-[80px] md:py-[130px] md:px-[80px] lg:py-[120px] lg:px-[120px] 2xl:py-[140px] 2xl:px-[220px] " >

        <h1 className="text-[30px] leading-[45px] md:text-[40px] md:leading-[55px] lg:text-[50px] lg:leading-[65px] 2xl:text-[72px] 2xl:leading-[87.14px] font-inter font-bold " > Our sponsors </h1>
        <div className="flex flex-col md:flex-row w-[98%] mx-auto gap-10 lg:gap-20  md:justify-between gap-y-20 justify-center 2xl:w-[1482px] my-20 " >
          <Image src="/images/apple.png" width={55.47} height={68} alt="apple-pic" />
          <Image src="/images/microsoft.png" width={287} height={62} alt="apple-pic" />
          <Image src="/images/Google.png" width={287} height={71} alt="apple-pic" />
          <Image src="/images/Group.png" width={211} height={69.81} alt="apple-pic" />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page
