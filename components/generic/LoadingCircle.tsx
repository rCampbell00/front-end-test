import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function LoadingCircle() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <ArrowPathIcon className='w-1/3 animate-spin' />
            <p>Loading...</p>
        </div>
    )
}