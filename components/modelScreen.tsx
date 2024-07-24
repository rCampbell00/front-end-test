import React from "react";
import ModelView from "./modelView";
import ModelMeta from "./modelMeta";

export default function ModelScreen() {
    return (
        <div className="flex flex-col w-3/4 flex-initial bg-gray-400 ">
            <ModelView />
            <ModelMeta addressOne="24 Hesters Way Road" addressTwo="" city="Cheltenham" state="Gloucestershire" postalCode="GL51 0DA" />
        </div>
    )
}