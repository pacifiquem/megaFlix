import React from 'react';


const GetStarted:React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className=' text-xl font-normal mt-6 mb-4 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='w-[50vw] h-[9.5vh] flex flex-row mx-auto border-solid border border-gray-800'>
                <input type="text" placeholder='Email Address' className=' h-[100%] bg-white w-[70%] outline-none p-5 font-sans text-xl' />
                <button className=' h-[100%] bg-red-600 w-[30%] font-sans font-normal text-white text-3xl'>Get Started &gt;</button>
            </div>
        </div>
    );
}

export default GetStarted;