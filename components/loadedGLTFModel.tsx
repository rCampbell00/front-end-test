import { useGLTF } from "@react-three/drei"

type LoadedGLTFModelProp = {
    modelLink: string,
}

export default function LoadedGLTFModel({modelLink}: LoadedGLTFModelProp) {
    const model = useGLTF(modelLink);
    return (
        <mesh>
            <primitive object={model.scene} />
        </mesh>
    )
}