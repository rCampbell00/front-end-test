import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function TitleBar() {
    return (
        <div className='flex items-center justify-center w-full bg-neutral-300 p-2 pb-4 mb-6'>
            <h1 className='text-4xl'>
                planarific
            </h1>
        </div>
    )
}