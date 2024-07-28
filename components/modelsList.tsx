'use client';
import React from "react";
import ModelListPanel from "./modelListPanel";
import refreshThumbnails from "@/actions/refreshThumbnails";
import { useEffect, useState, useCallback } from "react";
import ErrorMessage from './generic/ErrorMessage';
import LoadingCircle from './generic/LoadingCircle';

type ModelListProps = {
    modelFunc: Function,
}

export type ModelThumbData = {
    id: number,
    description: string,
    thumbnail: string,
  };
  

export default function ModelsList({modelFunc}: ModelListProps) {
    const [modelThumbs, setThumbs] = useState<ModelThumbData[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getThumbnails = useCallback(
        async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const thumbs = await refreshThumbnails();
                setThumbs(thumbs)
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }, []
    );

    useEffect(() => {
        getThumbnails();
        return;
    }, [getThumbnails]);

    return (
        <div className="flex flex-col w-1/4 flex-initial bg-gray-400 ">
            <h1 className="flex bg-neutral-300 h-9 p-2 justify-center text-2xl">Model Selection</h1>
  
            <div className="flex flex-col overflow-y-auto flex-gorw h-minus-title">
            {isError ? 
            <ErrorMessage message='Unable to Load Model Thumbnail' retryFunc={getThumbnails}/>
            : isLoading ? 
            <LoadingCircle/> :
                modelThumbs && 
                modelThumbs.map(model => <ModelListPanel onClick={modelFunc}
                    key={model.id} id={model.id} thumbnail={model.thumbnail} description={model.description}
                    />)
            }    
            </div>
        </div>
    )
}