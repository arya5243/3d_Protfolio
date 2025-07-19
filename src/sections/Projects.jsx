import React, { Suspense, useState } from 'react'
import { myProjects } from '../Constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const Projects = () => {
  const ProjectCount = myProjects.length;

  const [Project, setProject] = useState(0)

  const Currentproject = myProjects[Project];

  const handleNav = (direction) => {
    setProject((prev) => {
      if (direction == "previous"){
        return prev === 0 ? ProjectCount - 1 : prev - 1;
      }
      else{
       return  prev === ProjectCount - 1 ? 0 : prev + 1;
      }
    })

  }
  return (
    <section className='c-space my-20' id="work">
        <p className="head-text">My Work</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0 ">
                    <img src={myProjects[0].spotlight} alt="apotlight" className='w-full h-96 object-cover rounded-xl' />
                </div>
                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={Currentproject.logoStyle}>
                  <img src={Currentproject.logo} alt="" className='w-10 h-10 shadow-sm' />
                </div>
                <div className='flex flex-col gap-5 text-white-600 my-5'>
                  <p className='text-white text-2xl font-semibold animatedText'>{Currentproject.title}</p>
                  <p className='animatedText'> {Currentproject.desc}</p>
                  <p className='animatedText'> {Currentproject.subdesc}</p>

                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                  <div className='flex items-center gap-3'>
                    {Currentproject.tags.map((tag, index) => (
                      <div key={index} className='tech-logo opacity-80 bg-gray-900'> 
                        <img src={tag.path} alt={tag.name} />
                      </div>
                    ))}
                  </div>
                  <a href={Currentproject.href} className='flex items-center gap-2 text-white-600 cursor-pointer' target='_blank' rel='noreferrer'>
                    <p>Check Live Site </p>
                    <img src="3d_Protfolio/assets/arrow-up.png" alt="" />
                  </a>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <button className='arrow-btn' onClick={() => handleNav('previous')}>
                    <img src="3d_Protfolio/assets/left-arrow.png" alt="" className='w-4 h-4'/>
                  </button>
                  <button className='arrow-btn' onClick={() => handleNav('next')}>
                    <img src="3d_Protfolio/assets/right-arrow.png" alt="" className='w-4 h-4'/>
                  </button>
                </div>
            </div>
            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
              <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]}  />
                <Center>
                  <Suspense fallback={<CanvasLoader/>}>
                      <group scale={2} position={[0, -3, 0]} rotateOnAxis={[0,-0.1,0]}>
                          <DemoComputer texture={Currentproject.texture}/>
                      </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />
              </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects