import React from 'react'
import HTML from '../assets/html.png';
import GitHub from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import CSS from '../assets/css.png';
import TailWind from '../assets/tailwind.png';
import REACT from '../assets/react.png';
import PHP from '../assets/php.png';
import SQL from '../assets/sql.jpg';
import Cplus from '../assets/cplus.png';
import Gatsby from '../assets/Gatsby.png'
import Netlify from '../assets/netlify.png'
import GraphQL from '../assets/GraphQL.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
     {/* container */}
     <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
         <div>
             <p className="text-4xl inline  border-b-4 border-pink-600 ">Skills</p>
             <p className="py-4">//These are the technologies I've worked with</p>
         </div>

         <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto" src={HTML} alt="html logo" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto" src={Javascript} alt="Javacript logo" />
                <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto" src={CSS} alt="CSS logo" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto" src={REACT} alt="React logo" />
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20" src={Gatsby} alt="Gatsby logo" />
                <p className="my-4">Gatsby JS</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-[250px]" src={TailWind} alt="Tailwind logo" />
                <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20"  src={Cplus} alt="C++ logo" />
                <p className="my-4">C++</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20" src={PHP} alt="PHP logo" />
                <p className="my-4">PHP</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto" src={GitHub} alt="Github logo" />
                <p className="my-4">Github</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20" src={Netlify} alt="Netlify logo" />
                <p className="my-4">Netlify</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20" src={GraphQL} alt="Grapghql logo" />
                <p className="my-4">GraphQL</p>
            </div>
            <div className="shadow-md shadow-black  hover:scale-110 duration-500" >
                <img className="w-20 mx-auto max-h-20" src={Mongo} alt="MongoDB logo" />
                <p className="my-4">MongoDb</p>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Skills