import React from 'react';
import { useState } from 'react';

type ModelMetaProps = {
    addressOne: string;
    addressTwo: string;
    city: string;
    state: string;
    postalCode: string;
}

export default function ModelMeta({addressOne, addressTwo, city, state, postalCode}: ModelMetaProps) {
    const [metaShown, setMetaShown] = useState(true);

    const swapMetaState = () => {
        setMetaShown(!metaShown);
        return;
    }

    return (
        <div className='transition z-10 flex flex-col w-3/4 absolute bottom-0 items-center bg-neutral-200'>
            <button type='button' className='flex bg-neutral-300 w-full justify-center' onClick={swapMetaState}>
                {metaShown ? "Object Data V" : "Object Data ^"}
                </button>
            <div className={metaShown ? `flex transition-all mb-2 w-full overflow-hidden duration-1000 h-20` 
                : `flex transition-all mb-2 w-full overflow-hidden h-0 duration-1000`}>
                <ul className=' w-1/2 pl-2'>
                    <li>Address Line One: {addressOne}</li>
                    <li>City: {city}</li>
                    <li>Postal/ZIP Code: {postalCode}</li>
                </ul>
                <ul className='w-1/2'>
                    <li>Address Line Two: {addressTwo}</li>
                    <li>State/County: {state}</li>
                </ul>
            </div>
        </div>
    )
}