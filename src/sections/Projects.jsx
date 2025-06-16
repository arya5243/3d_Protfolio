import React from 'react'
import { myProjects } from '../Constants'

const Projects = () => {
  return (
    <section className='c-space my-20'>
        <p className="head-text">My Work</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0 ">
                    <img src={myProjects[0].spotlight} alt="apotlight" className='w-full h-96 object-cover rounded-xl' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects