import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] relative z-10 "
    >
      {/* Container  */}
      <div className=" max-w-[1000px] mx-auto  px-8 lg:px-20 flex flex-col justify-center h-full " >
        <p className="text-pink-600"> The FullStack Experience </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">Delivering Exceptional Interactive Websites </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500 capitalize">for Your Business</h2>
        <p className="text-gray-500 max-w-2xl py-4  " >I specialize in building responsive full-stack web applications.</p>
        <div>
        <Link  to="work" spy={true} smooth={true} duration={500} >
            <button className="group  text-white border-2 px-4 py-4 mt-8 md:mt-16 flex items-center hover:bg-pink-600 hover:border-pink-600" >  View Work 
            <span className="group-hover:rotate-90 duration-300" ><HiArrowNarrowRight className="ml-2" /></span>
            </button>
        </Link>
        </div>
      </div>
      <span className="circle -z-10 h-60 w-60 md:h-[900px] md:w-[900px] top-[10%] md:-top-[10%] right-[20%] opacity-20 " ></span>
      <div className="absolute -z-20  rotate-45  font-bold hidden sm:block  md:right-[20%] md:top-1/3   ">
        <p className="text-6xl md:text-9xl text-pink-600 text-opacity-10 ">Front End</p>
        <br/>
        <p className="text-6xl md:text-9xl text-pink-600  text-opacity-10">Back End</p>
        <br/>
        <p className="text-6xl md:text-9xl text-pink-600 text-opacity-10">Ui/Ux</p>
      </div>
    </div>
    
  )
}

export default Home


