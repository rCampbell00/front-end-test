import React from 'react';

type ModelMetaProps = {
    addressOne: string;
    addressTwo: string;
    city: string;
    state: string;
    postalCode: string;
}

export default function ModelMeta({addressOne, addressTwo, city, state, postalCode}: ModelMetaProps) {
    return (
        <div className='trasition flex flex-col w-3/4 absolute bottom-0 items-center bg-neutral-200'>
            <button type='button' className='flex bg-neutral-300 w-full justify-center'>Object Data ^</button>
            <div className='flex mb-2 w-full'>
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