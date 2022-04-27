import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] "
    >
      {/* Container  */}
      <div className=" max-w-[1000px] mx-auto  px-8 lg:px-20 flex flex-col justify-center h-full " >
        <p className="text-pink-600"> Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">Guy</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">I'm a Full Stack Developer</h2>
        <p className="text-gray-500 max-w-2xl py-4  " >I specialize in building responsive full-stack web applications.</p>
        <div>
            
            <button className="group text-white border-2 px-4 py-4 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600" >  View Work 
            <span className="group-hover:rotate-90 duration-300" ><HiArrowNarrowRight className="ml-2" /></span>
            </button>
            
        </div>
      </div>
    </div>
  )
}

export default Home