import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  ">
       <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
       </div>
       {/* menu */}
      
          <ul className="hidden md:flex">
              <li> 
                  <Link  to="home" spy={true} smooth={true} duration={500} >
                    Home
                </Link>
              </li>
              <li>
                  <Link  to="about" spy={true} smooth={true} duration={500} >
                    About
                  </Link>
              </li>
              <li>
                  <Link  to="skills" spy={true} smooth={true} duration={500} >
                    Skills
                    </Link>
             </li>
              <li>
                  <Link  to="work" spy={true} smooth={true} duration={500} >
                    Work
                </Link>
                </li>
              <li>
                <Link  to="contact" spy={true} smooth={true} duration={500} >
                    Contact
                </Link>
              </li>
          </ul>
      
        {/* hamburger  */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/>}
            
        </div>
        {/* mobile menu  */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
              <li  className='py-6 text-4xl'>
                  <Link  onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
                    Home
                </Link>
                </li>
              <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} >
                     About
                   </Link>
              </li>
              <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500} >
                        Skills
                    </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="work" spy={true} smooth={true} duration={500} >
                    Work
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500} >
                    Contact
                </Link>
              </li>
        </ul>

        {/* social icons   */}
        <div className=" fixed flex-col top-[35%] left-0 hidden lg:flex">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                    <a href='/' className="flex justify-between items-center w-full text-gray-300    " >LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                    <a href='/' className="flex justify-between items-center w-full text-gray-300    " >GitHub <FaGithub size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 ">
                    <a href='/' className="flex justify-between items-center w-full text-gray-300    " >Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900  ">
                    <a href='/' className="flex justify-between items-center w-full text-gray-300    " >Email <HiMail size={30} /></a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar