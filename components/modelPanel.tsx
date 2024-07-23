import React from 'react';
import Image from 'next/image';

type ModelPanelProps = {
    id: number;
    description: string;
    thumbnail: string;
}

export default function ModelPanel({id, description, thumbnail}: ModelPanelProps) {
    return (
        <div className='items-center w-11/12 bg-neutral-300 p-2 rounded'>
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