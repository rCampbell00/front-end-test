'use client';
import TitleBar from "@/components/generic/TitleBar"
import ModelsList from "@/components/modelsList";
import ModelScreen from "@/components/modelScreen";
import { useState } from "react";
import getModelData from "@/actions/getModel";
import { useGLTF } from "@react-three/drei";

export type ModelData = {
  id: number,
  address1: string,
  address2: string,
  city: string,
  state: string,
  postal_code: string,
  thumb: string,
  model: string,
}


export default function Page() {
    const [modelData, setModelData] = useState<ModelData>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    const testFunc = async (id: number) => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getModelData(id);
        setModelData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    return (
      <>
        <TitleBar />
        <div className="flex">
          <ModelsList modelFunc={testFunc}/>
          <ModelScreen modelData={modelData}/>
        </div>
      </>

    );
  }