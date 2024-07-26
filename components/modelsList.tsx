'use client';
import React from "react";
import ModelListPanel from "./modelListPanel";
import refreshThumbnails from "@/actions/refreshThumbnails";
import { useEffect, useState, useCallback } from "react";

export type ModelThumbData = {
    id: number,
    description: string,
    thumbnail: string,
  };
  

export default function ModelsList() {
    const [modelThumbs, setThumbs] = useState<ModelThumbData[]>();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    const getThumbnails = useCallback(
        async (signal: AbortSignal) => {
            setIsLoading(true);
            setIsError(false);
            const thumbs = await refreshThumbnails();
            setThumbs(thumbs)
            setIsLoading(false);
        }, []
    );

    useEffect(() => {
        const controller = new AbortController();
        getThumbnails(controller.signal);
        return () => controller.abort();
      }, [getThumbnails]);

    return (
        <div className="flex flex-col w-1/4 flex-initial bg-gray-400 ">
            <h1 className="flex bg-neutral-300 h-9 p-2 justify-center text-2xl">Model Selection</h1>
  
            <div className="flex flex-col overflow-y-auto flex-gorw h-minus-title">
            {
                isLoading ? <p>Loading...</p> : isError ? error : modelThumbs && 
                modelThumbs.map(model => <ModelListPanel key={model.id} id={model.id} thumbnail={model.thumbnail} description={model.description}/>)
            }    
            </div>
        </div>
    )
}