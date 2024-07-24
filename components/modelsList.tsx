import React from "react";
import ModelListPanel from "./modelListPanel";

export default function ModelsList() {
    return (
        <div className="flex flex-col w-1/4 flex-initial bg-gray-400 ">
                <h1 className="flex bg-neutral-300 h-9 p-2 justify-center text-2xl">Model Selection</h1>
                <div className="flex flex-col overflow-y-auto flex-gorw h-[calc(100vh-5.25rem)]">
                    <ModelListPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
                    <ModelListPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
                    <ModelListPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
                    <ModelListPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
                    <ModelListPanel id={1} description="24 Hesters Way Road GL51 0DA" thumbnail="/thumbs/1.png"/>
                </div>
        </div>
    )
}