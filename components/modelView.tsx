import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

export default function modelView() {
    const cameraControlRef = useRef<CameraControls | null>(null)
    return (
        <Canvas>
            <CameraControls ref={cameraControlRef} />
            <ambientLight intensity={1} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}