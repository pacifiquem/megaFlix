import React from 'react';
import background from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import GetStarted from '../components/getStarted';
import HomeDiscription from '../components/homeDiscription';
import { EnjoyOnYourTv } from '../components/functionalities';


const Home:React.FC = () => {
    return (
        <div className=' overflow-hidden'>
            <div className="container bg-cover w-full h-full bg-repeat border-b-8 border-[#272525]" style={{backgroundImage : `linear-gradient(to top,rgba(0,0,0,.9)0, rgba(0,0,0,.3)60%, rgba(0,0,0,.3)70%, rgba(0,0,0,.9)100%), url(${background})`}}>
                <div className=" flex flex-row gap-logo-sign py-9">
                    <img src={logo} alt="Megaflix logo" className=' mx-14 hover:cursor-pointer' />
                    <button className=' bg-red-600 p-0 text-white font-semibold text-lg rounded w-[6%] h-[5vh]'>Sign In</button>
                </div>
                <HomeDiscription />
                <GetStarted />
            </div>
            <EnjoyOnYourTv />
        </div>
    );
}

export default Home;