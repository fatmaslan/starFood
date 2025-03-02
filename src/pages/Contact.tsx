

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center mb-0 " 
      style={{backgroundImage: "url('/contact.jpg')", backgroundSize: "cover"}}> 
      <div className="text-white flex items-center flex-col ml-96 ">
        <h1 className="text-4xl font-bold  mb-10">Where are we??</h1>
        <div className=" flex flex-1/2  gap-17">
        <div> 
          <h2 className="text-2xl font-bold text-yellow-400">İstanbul-Beşiktaş </h2> 
          <p className="mt-4 text-xl font-mono">Address:Aydin sk. N0.1 <br></br>Apartment:1</p>
          <p className=" text-xl font-mono">Tel:05390274400</p>
          </div>
          <div>
          <h2 className="text-2xl font-bold text-yellow-400">İstanbul-Maltepe </h2> 
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
