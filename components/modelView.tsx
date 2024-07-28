import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { ModelData } from '@/app/page'
import LoadedGLTFModel from './loadedGLTFModel'

type ModelViewProp = {
    modelData: ModelData | undefined,
}

export default function ModelView({modelData}: ModelViewProp) {
    const cameraControlRef = useRef<CameraControls | null>(null)
    return (
        <div className='h-[calc(100vh-3rem)] overflow-hidden'>
            <div className='flex flex-row'>
                <button type='button' className='z-10 bg-planarific rounded-full p-2 mt-1 mr-5'
                onClick={() => {cameraControlRef.current?.reset(true)}}>
                    Reset View
                </button>            
                <p className='z-10 bg-planarific p-2 mt-1 w-fit'>
                    Left click to rotate
                </p>         
                <p className='z-10 bg-planarific p-2 mt-1 w-fit'>
                    Right click to pan
                </p>       
                <p className='z-10 bg-planarific p-2 mt-1 w-fit'>
                    scroll to zoom
                </p>
            </div>


            <Canvas>
                <CameraControls ref={cameraControlRef} />
                <ambientLight intensity={1} />
                {modelData ? <LoadedGLTFModel modelLink={modelData.model}/> : <></>}
            </Canvas>
        </div>
    )
}