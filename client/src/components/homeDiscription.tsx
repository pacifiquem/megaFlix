import React from 'react';


const HomeDiscription:React.FC = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center mt-[4.5rem]'>
            <h1 className=' text-[3.5rem] tracking-tight md:tracking-normal md:text-[4rem] font-semibold'>Unlimited movies, TV</h1>
            <h2 className=' text-5xl tracking-tight md:tracking-normal md:text-6xl font-semibold mb-1'>shows, and more.</h2>
            <p className=' text-2xl tracking-tight md:tracking-normal md:text-3xl font-normal my-3'>watch anywhere. cancel anytime.</p>
        </div>
    );
}

export default HomeDiscription;