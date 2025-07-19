import React from 'react'
import Button from '../Components/Button'
import { useState } from "react"
const Globe = React.lazy(()=> import("react-globe.gl"))

const About = () => {
  const [Copy,setCopy] = useState(false)

  const handleCopy =() =>{
      navigator.clipboard.writeText('aj375067@gmail.com')
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      },2000)
  }
  return (
    <section className="c-space my-20" Loading="lazy" id="about" >
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                  <img src="/3d_Protfolio/assets/grid1.png" alt="" className="w-full sm:h-[276px] h-fit object-contain"/>
                  <div>
                    <p className="grid-headtext">Hi, I am Aryan</p>
                    <p className="grid-subtext">With 1 years of Experience, I have honed my skills in frontend and backend development with a focus on 3d websites.</p>
                  </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <img src="/3d_Protfolio/assets/grid2.png" alt="" className="w-full sm:w-[300px] h-fit object-contain m-auto rounded-2xl"/>
                <div>
                  <p className="grid-headtext">Tech Stack</p>
                  <p className="grid-subtext">I specalize in Javascript with a focus on React and Next.js ecosystem.</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
              <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                  <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules 
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{
                    lat:25.9644,lng:85.2722,text:"I am Here",color:"white",size:1000,
                  }]} />
                </div>
                <div >
                  <p className="grid-headtext">I work remotely across all Timezones</p>
                  <p className="grid-subtext">I am based in India, with remote work available.</p>
                  <a href="#contact" >
                    <Button name="Contact  Me" containerClass="w-full mt-10 flex justify-center items-center" isBeam/>
                  </a>
                </div>
              </div>
            </div>
              <div className="xl:col-span-2 xl:row-span-3">
                  <div className="grid-container">
                      <img src="/3d_Protfolio/assets/grid3.png" alt="grid3" className="w-full sm:h-[276px] h-fit object-contain" />
                      <div>
                        <p className="grid-headtext">My passion for coding</p>
                        <p className="grid-subtext">I love solving problems and building things through code. Coding is'nt just my proffesion -it is my passion</p>

                      </div>
                  </div>
              </div>
              <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                  <img src="/3d_Protfolio/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                  <div className="space-y-2">
                    <p className="grid-subtext text-center">Contact me </p>
                    <div className="copy-container" onClick={handleCopy}>
                        <img src={Copy ? "/3d_Protfolio/assets/tick.svg" : "/3d_Protfolio/assets/copy.svg"} alt="" />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white " > aj375067@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </section>
  )
}

export default About