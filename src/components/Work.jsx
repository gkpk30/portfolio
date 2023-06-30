import React from 'react'
import captainImg1 from '../assets/ctc.jpg'
import workImg from '../assets/workImg.jpg'
import realestate from '../assets/realestate.jpg'
import Thumbnail from '../components/Thumbnail'
import hano from '../assets/hanoImage.jpg'
import tfg from '../assets/tfg.jpg'
import evo from '../assets/evoterm.jpg'
import bs from '../assets/bettersalon.jpg'

// Add new projects to below array  
const projectList = [
    {name: 'captain Termite', url: 'https://www.captaintermitecontrol.com', description: 'Gatsby, MUI, ChartJS, MarkDown', img: captainImg1, gitHub: 'https://github.com/gkpk30/cptermiteHero'}, 
    {name: 'HTCO', url: 'http://www.hanotrading.com', description: 'CSS HTML', img: hano , gitHub: 'https://github.com/gkpk30/hano' },
    // {name: 'The Financing Guy', url: 'https://thefinancingguy.com', description: 'Word Press', img: workImg },
    {name: 'The Financing Guy', url: 'https://thefinancingguy.com', description: 'Word Press', img: tfg },
    {name: 'Evolution Termite', url: 'https://evolution-termite.netlify.app/', description: 'Gatsby', img: evo, gitHub: 'https://github.com/gkpk30/evolution-termite' },
    {name: 'Better Salon', url: 'https://better-salon.netlify.app/', description: 'NextJs GraphCMS', img: bs, gitHub: 'https://github.com/gkpk30/cptermiteHero' },

]

const work = () => {

  return (
    <div name="work" className="w-full pt-28 h-auto md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600" >Work 2022-2023</p>
                <p className="py-6">//Take a glimpse into some of the recent work I've had the privilege to work on. Each endeavor represents a unique collaboration and showcases my dedication to delivering outstanding results. Here are a few highlights:</p>
            </div>
                {/* Container  */}
            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* <Thumbnail imageUrl={captainImg3} description="Gatsby and Material UI"/>
                <Thumbnail imageUrl={workImg}/>
                <Thumbnail imageUrl={realestate}/>
                <Thumbnail imageUrl={hano} description="SCSS"/> */}

                {
                projectList.map((project, index) => (
                    <Thumbnail key={index} imageUrl= {project.img} url={project.url}  description={project.description} gitHub={project.gitHub}/>
                ))
                }

            </div>
        </div>
    </div>
  )
}

export default work