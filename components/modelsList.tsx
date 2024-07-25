import React from "react";
import ModelListPanel from "./modelListPanel";
import { ModelThumbData } from "@/pages";

type ModelListProps = {
    thumbnails: ModelThumbData[]
}

export default function ModelsList({thumbnails}: ModelListProps) {
    return (
        <div className="flex flex-col w-1/4 flex-initial bg-gray-400 ">
                <h1 className="flex bg-neutral-300 h-9 p-2 justify-center text-2xl">Model Selection</h1>
                <div className="flex flex-col overflow-y-auto flex-gorw h-minus-title">
                    {thumbnails.map(model => <ModelListPanel key={model.id} id={model.id} thumbnail={model.thumbnail} description={model.description}/>)}
                </div>
        </div>
    )
}