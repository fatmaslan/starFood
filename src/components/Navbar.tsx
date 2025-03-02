import { IoStarSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-400 w-full h-30 flex fixed shadow-2xl z-10 ">
      <div className="flex bg-transparent items-center ">
        <h2 className="text-white text-7xl font-serif p-5 cursor-pointer  "onClick={(()=>navigate('/'))}>STARFOOD</h2>
        <div className="flex items-center mt-8"> 
        <IoStarSharp className="text-yellow-300" size={10} />
        <IoStarSharp className="text-yellow-300" size={15} />
        <IoStarSharp className="text-yellow-300" size={20}/> 
        </div>
      </div>

      <div className="flex flex-row ml-auto space-x-4 text-white m-10  ">
        <Link className="text-2xl md:text-lg sm:text-base font-bold hover:text-yellow-500 transition-all duration-200 hover:text-3xl" to="/">Home</Link>
        <Link className="text-2xl md:text-md  sm:text-sm font-bold hover:text-yellow-500 transition-all duration-200 hover:text-3xl" to="/menu">Menu</Link>
        <Link className="text-2xl md:text-md sm:text-sm font-bold hover:text-yellow-500 transition-all duration-200 hover:text-3xl" to="/contact">Contact</Link>
        <Link className="text-2xl md:text-md sm:text-sm font-bold hover:text-yellow-500 transition-all duration-200 hover:text-3xl" to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar
