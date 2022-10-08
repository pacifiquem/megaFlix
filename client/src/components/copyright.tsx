import React from 'react';


const Copyright:React.FC = () => {
    return (
        <div className=' mb-6'>
            <p className=' text-center text-[#4e4e4e] font-medium font-sans text-lg'>	&#169; 2022 <span className=' cursor-pointer' onClick={() => {window.location.replace('https://github.com/pacifiquem')}}>pacifiquem</span></p>
        </div>
    );
}


export default Copyright;