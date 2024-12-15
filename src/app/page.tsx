import Header from "./Components/header"
import "@fontsource/inter"
import Image from "next/image"
import Footer from "./Components/footer"




function Page() {
  return (
    <div className="w-[1920px]" >
      {/* header */}
      <Header />
      {/*Hero section  */}
      <div className="w-full h-[829px] py-[140px] px-[220px] bg-[#043873] text-white flex top-[140px] " >

        {/* left */}
        <div className="flex flex-col w-[656px] h-[361px] gap-14 font-inter font-semibold my-auto  " >
          <h1 className=" text-[64px] leading-[77.45px] " >Get More Done with whitepace</h1>
          <p className="text-lg font-normal " >Project management software that enables your teams to collaborate, plan, analyze
            and manage everyday tasks</p>

          <div className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] text-center " >
            <button>Try Whitepace free</button>
          </div>
        </div>

        {/* right */}
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] gap-1 " >
        </div>
      </div>

      {/* second page */}
      <div className="w-full h-[1588px] py-[140px] px-[220px] flex flex-col gap-[100px]   " >
        {/* first section */}
        <div className="w-[1480px] h-[547px] flex gap-[60px] " >
          {/*left  */}
          <div className="flex flex-col w-[672px] h-[411px] gap-[60px] my-auto  " >
            <h1 className="text-[72px] leading-[87.14px] " >Project Management</h1>
            <p className="text-[18px] leading-[30px] " >Images, videos, PDFs and audio files are supported.
              Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

            <div className="bg-[#4F9CF9] py-5 px-10 h-[63px] w-[201px] text-center " >
              <button>Get Started </button>
            </div>
          </div>
          {/* right */}
          <div className="w-[748px] h-[547px] bg-[#C4DEFD] " ></div>
        </div>

        {/* Second section */}

        <div className="w-[1480px] h-[661px] gap-[100px] flex  " >
          <div>
            <Image src="/images/balsimg.png" width={710} height={610} alt="Bals Image" />
          </div>
          <div className="font-inter w-[670px] h-[294px] gap-[60px] flex flex-col my-auto " >
            <h1 className="text-[72px] leading-[87.14px] font-bold  " >Work together</h1>
            <p className="text-[18px] leading-[30px] " >With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>

            <div className="bg-[#4F9CF9] py-5 px-10 flex w-[186px] h-[63px] " >
              <button type="button" >Try it now </button>
            </div>
          </div>

        </div>
      </div>

      {/* Third page */}
      <div className=" w-full h-[574px] bg-[#043873] top-[2513px] py-[140px] px-[220px] text-white " >
        <div className="w-[1481px] h-[294px] gap-[60px] mx-auto font-inter flex flex-col text-center " >
          <h1 className="text-[72px] leading-[87.14px] font-bold " >Your work, everywhere you are</h1>
          <p className=" text-[18px] leading-[30px] w-[1064px] h-[60px] mx-auto font-normal   " >Access your notes from your computer, phone or tablet by synchronising with various services,
            including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and
            iOS. A terminal app is also available!</p>

          <div className="bg-[#4F9CF9] w-[195px] h-[63px] text-center py-5 px-10 mx-auto  " >
            <button type="button" > Try Taskey </button>
          </div>
        </div>
      </div>

      {/*Sponser Page */}
      <div className="w-full h-[538px] top-[3078px] py-[140px] px-[220px] " >

        <h1 className="text-center text-[72px] leading-[87.14px] font-inter font-bold " > Our sponsors </h1>
        <div className="flex justify-between w-[1482px] my-20 " >
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
