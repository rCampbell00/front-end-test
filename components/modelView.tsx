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
            <button type='button' className='z-10'
            onClick={() => {cameraControlRef.current?.reset(true)}}>
                Reset View
            </button>
            <Canvas>
                <CameraControls ref={cameraControlRef} />
                <ambientLight intensity={1} />
                {modelData ? <LoadedGLTFModel modelLink={modelData.model}/> : <></>}
            </Canvas>
        </div>
    )
}