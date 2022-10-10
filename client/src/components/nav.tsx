import React from "react";
import {BiSearch, BiNotification} from 'react-icons/bi'
import logo from '../assets/images/logo.png';


const Nav:React.FC = () => {
    return(
        <div className="flex flex-row gap-[5%] h-[8vh] px-16 justify-start items-center bg-[#3f3f3f3a] sticky top-0">
             <img src={logo} alt="Megaflix logo" className='hover:cursor-pointer w-[8%] h-[70%]' onClick={() => {window.location.href='https://atmegaflix.vercel.app/welcome'}}/>
             <div className="text-white flex flex-row gap-[4%] w-[35%] font-medium text-xl">
                <div className="flex justify-center items-center hover:cursor-pointer hover:text-red-500 hover:underline">Home</div>
                <div className="flex justify-center items-center hover:cursor-pointer hover:text-red-500 hover:underline">Movies</div>
                <div className="flex justify-center items-center hover:cursor-pointer hover:text-red-500 hover:underline">TV Shows</div>
                <div className="flex justify-center items-center hover:cursor-pointer hover:text-red-500 hover:underline">New & Popular</div>
                <div className="flex justify-center items-center hover:cursor-pointer hover:text-red-500 hover:underline">My List</div>
             </div>
             <div className="flex flex-row w-[15%] gap-[10%] justify-center items-center text-white h-[100%] ml-[32%] ">
                <BiSearch className="w-[15%] h-[100%] hover:cursor-pointer hover:text-red-500"/>
                <div className="hover:cursor-pointer text-xl font-medium hover:text-red-500">Kids</div>
                <BiNotification className="w-[15%] h-[100%] hover:cursor-pointer hover:text-red-500"/>
             </div>
        </div>
    );
}


export default Nav;