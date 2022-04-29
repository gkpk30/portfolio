import React from 'react'
import captainImg2 from '../assets/captainImg2.png'
import workImg from '../assets/workImg.jpg'
import realestate from '../assets/realestate.jpg'
import Thumbnail from '../components/Thumbnail'
import hano from '../assets/hano.png'

// Add new projects to below array  
const projectList = [
    {name: 'captain Termite', url: 'https://www.captaintermitecontrol.com', description: 'Gatsby, MUI, ChartJS, MarkDown', img: captainImg2, gitHub: 'https://github.com/gkpk30/cptermiteHero'}, 
    {name: 'HTCO', url: 'http://www.hanotrading.com', description: 'CSS', img: hano },
    {name: 'LokiLotion', url: '', description: 'BootStrap', img: workImg }

]

const work = () => {

  return (
    <div name="work" className="w-full h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600" >Work</p>
                <p className="py-6">//Some of my recent Work</p>
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