'use client';
import React from "react";
import ModelView from "./modelView";
import ModelMeta from "./modelMeta";
import { ModelData } from "@/app/page";

type ModelScreenProps = {
    modelData: ModelData|undefined,
}

export default function ModelScreen({modelData}: ModelScreenProps) {
    return (
        <div className="flex flex-col w-3/4 flex-initial bg-gray-400 overlow-hidden">
            <ModelView modelData={modelData} />
            {modelData ? <ModelMeta addressOne={modelData.address1} addressTwo={modelData.address2} 
            city={modelData.city} state={modelData.state} postalCode={modelData.postal_code} />
            : <></>
            }
            
        </div>
    )
}