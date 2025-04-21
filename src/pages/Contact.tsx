import { Link } from "react-router-dom"


const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen mt-16">
      <div className=" w-full max-w-full min-h-screen bg-cover bg-center flex items-center justify-center mb-6" 
      style={{backgroundImage: "url('/contact.jpg')", backgroundSize: "cover"}}> 
      <div className="text-white flex items-center flex-col md:ml-96 ml-16 ">
        <h1 className="text-4xl font-bold  mb-10">Where are we??</h1>
        <div className=" md:flex md:flex-1/2 flex-col gap-17">
        <div> 
          <Link to={"/iki"} className="text-2xl font-bold text-yellow-600">İstanbul-Beşiktaş </Link> 
          <p className="mt-4 text-xl font-mono">Address:Aydin sk. N0.1 <br></br>Apartment:1</p>
          <p className=" text-xl font-mono">Tel:05390274400</p>
          </div>
          <div>
          <Link to={"/bir"}  className="text-2xl font-bold text-yellow-600">İstanbul-Maltepe </Link> 
          <p  className="mt-4 text-xl font-mono">Address:Küçük sk. N0.32 <br></br>Apartment:10</p>
          <p className=" text-xl font-mono">Tel:05390270044</p>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
