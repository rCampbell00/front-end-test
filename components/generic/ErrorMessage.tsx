import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type ErrorMessageProp = {
    message: string
    retryFunc: Function
}

export default function ErrorMessage({message, retryFunc}:ErrorMessageProp) {

    const handleClick = () => {
        retryFunc();
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <ExclamationCircleIcon className='w-1/6 text-red-600'/>
            <p className='text-red-600'>{message}</p>
            <button className='bg-planarific rounded-full p-2' onClick={handleClick}>Try again</button>
        </div>
    )
}