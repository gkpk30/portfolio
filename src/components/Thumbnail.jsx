import React from 'react'



const Thumbnail = (props) => {
    
  return (
    <div style={{backgroundImage:`url(${props.imageUrl})`}} className="group container shadow-lg shadow-black rounded-md flex justify-center items-center mx-auto content-div">

                    {/* hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100" >
                        <span className="text-2xl px-4 font-bold text-white tracking-wider">
                           {props.description}
                        </span>
                        <div className="pt-8 text-center ">
                            <a href={props.url} target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Demo</button>
                            </a>
                            {
                            props.gitHub?  <a href={props.gitHub} target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Code</button>
                            </a> 
                            :
                            null
                            }
                           
                        </div>
                    </div>
                    
                </div>
  )
}

export default Thumbnail
