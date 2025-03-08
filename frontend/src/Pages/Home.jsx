
import { useEffect, useState } from "react";
import ContactForm from "../Components/ContactForm";
import DonationList from "../Components/Filter/DonationList";

const images = [
  "/oldage_hero.jpg",
  "/childrenshd.jpg",
  "/food donation.jpg",
  "/Orphanage1.jpg",
  "/Main-Banner-3.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200">
   <div className="min-h-screen bg-cover bg-gray-400 bg-center flex items-center w-full overflow-hidden relative" id="Header">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 contrast-120 ${index === currentImage ? 'opacity-60' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center" }} 
          ></div>
        ))}
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-100">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Turn kindness into Essentials for those in Need !
          </h2>
          <div className="space-x-6 mt-16">
            <a href="/register" className="bg-green-700 px-8 py-3 rounded text-white w-5xl font-bold h-10">
              Donate Now
            </a>
          </div>
        </div>
      </div>
       <div className="min-h-screen bg-gray-200 ">
            <h1 className="text-3xl font-bold text-center p-6 text-black">Find Donation Requests</h1>
            <DonationList />
        </div>
        {/* <Blogging /> */}
        <ContactForm/>

  </div>
  )
}

export default Home;
