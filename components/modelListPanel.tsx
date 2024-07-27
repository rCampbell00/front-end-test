import React from 'react';
import Image from 'next/image';

type ModelListPanelProps = {
    id: number;
    description: string;
    thumbnail: string;
    onClick: Function;
}

export default function ModelListPanel({id, description, thumbnail, onClick}: ModelListPanelProps) {

    const handleClick = () => {
        onClick(id);
    }

    return (
        <div className='items-center  bg-neutral-300 p-2 rounded mb-2 ml-1 mt-2 mr-1' onClick={handleClick}>
            <Image
                src={"/static/images"+thumbnail}
                alt={"Location Thumbnail"}
                width={640}
                height={640}
            />
            <p>{description}</p>
        </div>
    )
}