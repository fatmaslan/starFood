
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div 
      className="w-full h-auto bg-cover bg-center flex items-center justify-center opacity-85 mb-0" 
      style={{backgroundImage: "url('/footer.jpg')", backgroundSize: "cover"}}
    >
      <div className="relative z-20 w-full px-4 py-10">
        <div className="container mx-auto">

          <div className="flex flex-col items-center mb-20">
            {/* <h2 className="text-4xl font-serif mb-4 flex">
              <IoStarSharp className="text-red-500" size={50} />
              <IoStarSharp className="text-red-500" size={50} />
              <IoStarSharp className="text-red-500" size={50} />
            </h2> */}
            {/* <p className="text-yellow-400 text-center text-5xl font-serif">Starfood</p> */}
          </div>
          
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white">
            <div className="md:col-span-2 flex flex-row gap-5 ml-20 mb-10">  
              <span>İnstagram <FaInstagram className="text-yellow-500" size={50}/></span>
              <span>Whatsapp <FaWhatsapp className="text-yellow-500" size={50}/></span>
            </div>

            <div className="text-center mr-20 mb-5">
              <p className="text-white">@fatma aslan</p>
              <p className="text-white">
                Designed By <span className="text-yellow-500">Fatma Aslan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-black text-center py-2">
        <p className="text-white text-sm">© 2025 Starfood, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
