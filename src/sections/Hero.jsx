import React from "react"
import {  PerspectiveCamera, Ring } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import  CanvasLoader from "../Components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../Constants"
import HeroCamera from "../Components/HeroCamera"
import Button from "../Components/Button"
import { Preload } from '@react-three/drei'
const Target = React.lazy(() => import("../Components/Target"))
const Cube = React.lazy(() => import("../Components/Cube"))
const Rings = React.lazy(() => import("../Components/Rings"))
const ReactLogo = React.lazy(() => import("../Components/ReactLogo"))
const HackerRoom = React.lazy(() => import("../Components/HackerRoom"))

const Hero = () => {
    
    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024});

    const sizes = calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className="min-h-screen  w-full flex flex-col relative" >
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans" >Hi, I am Aryan <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient ">Buliding Products & Brands</p>
        </div>

        <div className="h-full w-full absolute inset-0">
            {/* /*<Leva /> */}
            <Canvas className="w-full h-full"  gl={{ antialias: false}} >
                <Preload all />
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera 
                    makeDefault
                     position={[0,0,20]}/>

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        position={sizes.deskPosition}
                        rotation={[0,-Math.PI,0]}
                        scale={sizes.deskScale}/>
                    </HeroCamera>
                     
                    
                    <ambientLight intensity={1}/>
                    <directionalLight 
                    position={[10,10,10]} 
                    intensity={0.5}/>

                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
                </Suspense>
            </Canvas>
            
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#contact" className="w-fit">
                <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
        </div>
    </section>
  )
}

export default Hero