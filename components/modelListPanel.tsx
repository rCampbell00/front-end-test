import React from 'react';
import Image from 'next/image';
import { useEffect, useState, useCallback } from "react";
import getThumbImage from '@/actions/getThumbImage';

type ModelListPanelProps = {
    id: number;
    description: string;
    thumbnail: string;
    onClick: Function;
}

export default function ModelListPanel({id, description, thumbnail, onClick}: ModelListPanelProps) {

    const [savedThumb, setThumbs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getThumbnails = useCallback(
        async () => {
            setIsLoading(true);
            setIsError(false);
            const thumbSaved = await getThumbImage(id);
            setThumbs(thumbSaved)
            setIsLoading(false);
        }, []
    );

    useEffect(() => {
        getThumbnails();
        return;
      }, [getThumbnails]);

    const handleClick = () => {
        onClick(id);
    }
    
    return (
        <div className='items-center  bg-neutral-300 p-2 rounded mb-2 ml-1 mt-2 mr-1' onClick={handleClick}>
            {savedThumb?
            <Image
            src={"/static/images"+thumbnail}
            alt={"Location Thumbnail"}
            width={640}
            height={640}
            />:<></>
            }

            <p>{description}</p>
        </div>
    )
}