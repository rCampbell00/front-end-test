'use client';
import React from "react";
import ModelView from "./modelView";
import ModelMeta from "./modelMeta";
import { ModelData } from "@/app/page";
import LoadingCircle from './generic/LoadingCircle';
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

type ModelScreenProps = {
    modelData: ModelData|undefined,
    isError: boolean,
    isLoading: boolean,
}

export default function ModelScreen({modelData, isError, isLoading}: ModelScreenProps) {
    return (
        <div className="flex flex-col w-3/4 flex-initial bg-gray-400 overlow-hidden">
            {isError ? 
            <div className='flex flex-col items-center justify-center'>
                <ExclamationCircleIcon className='w-1/6 text-red-600'/>
                <p className='text-red-600'>Unable to load model</p>
            </div>
            : isLoading ? 
            <LoadingCircle/> : modelData ? <>
            <ModelView modelData={modelData} />
            <ModelMeta addressOne={modelData.address1} addressTwo={modelData.address2} 
            city={modelData.city} state={modelData.state} postalCode={modelData.postal_code} />
            </>
            : <></>}
        </div>
    )
}