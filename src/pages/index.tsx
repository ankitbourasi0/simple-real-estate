import Image from "next/image";
import { Inter } from "next/font/google";
import CarouselApp from "@/components/Carousel";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const offers = [
    { title: "Property Sales",hindi:"प्रॉपर्टी सेल" },
    { title: "Real Estate Consulting", hindi:"रियल एस्टेट कंसल्टिंग "},
    { title: "Property Marketing",hindi:" प्रॉपर्टी मार्केटिंग" },
    { title: "Legal and Financial Services", hindi:"कानूनी और फायनान्स सेवाएँ"},
    { title: "Home Loans", hindi:"घर लोन"},
    { title: "Land Development",hindi:"ज़मीन विकास" },
  ]

  

  return (
    <main className="w-full bg-white "    >
      {/* header  */}
      <div className="w-full min-h-[35vh] bg-white text-center h-full flex flex-col justify-center">
        <h2 className="font-semibold text-lg"></h2>
        <h1 className="text-4xl md:text-7xl font-bold">बनाइये अपने सपनो का घर</h1>
        <p className="my-4 font-semibold md:text-xl text-zinc-700">आज हि ढूंढे अपने सपनो का घर लखनऊ में</p>
      </div>

      {/* carousel  */}
      <div className="mb-20">
        <CarouselApp />
      </div>

      {/* offer section  */}
      <div className="w-full text-center mb-12">
        <h1 className="text-2xl md:text-7xl font-bold">Hum Offer करते है</h1>
        <p className="my-4 md:text-xl text-xs font-semibold text-zinc-500">हर वो चीज़ जो आपकी मदद करे अपनी ज़मीन धुंडने में</p>
        <div className="grid md:grid-cols-3 my-10  px-2 sm:grid-cols-2 grid-cols-2 gap-4 max-w-5xl mx-auto">
          {offers.map(e => 
          <div key={e.title} className="md:p-8 p-4 rounded-lg bg-gray-100 flex flex-col justify-center items-center space-y-2">
            <p className="text-xs md:text-xl text-zinc-700 font-medium">{e.title}</p>
            <p className="text-xs md:text-xl font-semibold">{e.hindi}</p>

          </div>)}
        </div>
      </div>

      <div className="w-full text-center mb-12">
        <h1 className="text-2xl md:text-7xl max-w-xl mx-auto font-bold border-b border-zinc-700 pb-6 mb-6">Projects / प्रोजेक्ट</h1>
        <div className="grid md:grid-cols-2 px-4 sm:grid-cols-2  grid-cols-1 gap-4 max-w-5xl mx-auto">
         <div className="shadow-lg rounded-lg p-4    ">
             <Image src={"/project/1.jpg"} alt="Project-1" width={720} height={970} />
         </div>
         <div className="shadow-lg rounded-lg p-4     ">
             <Image src={"/project/2.png"} alt="Project-1" width={452} height={451} />
         </div>
        </div>
      </div>

      <div className="text-center w-full max-w-5xl mx-auto pb-48 ">
        <h2 className="text-xl my-4 md:text-5xl font-bold text-zinc-800 mb-10">आज हि संपर्क करे -</h2>
      
        <a href="tel:9219679580" className=" md:text-3xl px-4 py-3 rounded-full bg-amber-300  shadow-sm ">+91-9219679580</a>
      </div>

      

    </main>
  );
}
