import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa'


interface props {
    name: string,
    discription: string
}

const DefaultMovie:React.FC <props> = (props) => {
    return (
        <div className='w-[60%] h-[50%] pt-8 px-16 text-white'>
            <h1 className='text-[4rem] font-semibold pt-16'>{props.name}</h1>
            <div  className='w-[70%] mb-8'>
                <p className='text-xl font-normal mt-6 mb-4'>{props.discription}</p>
            </div>
            <button className='w-[20%] bg-[#4c484877] hover:bg-[#b3b3b386] px-2 py-3 text-2xl rounded'><FaPlay className='inline mr-2'/> Play</button>
            <button className='w-[25%] bg-[#b3b3b386] hover:bg-[#4c484877] px-2 py-3 text-2xl ml-8 rounded'><BsInfoCircle className='inline mr-2'/> More Info </button>
        </div>
    );
}

export default DefaultMovie;