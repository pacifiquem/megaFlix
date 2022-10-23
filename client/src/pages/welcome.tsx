import React, { useState } from 'react';
import background from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import GetStarted from '../components/getStarted';
import HomeDiscription from '../components/homeDiscription';
import { EnjoyOnYourTv, DownloadToWatchOffline, WatchEveryWhere, ProfileForKids } from '../components/functionalities';
import Faq from '../components/faq';
import Footer from '../components/footer';
import { Navigate } from 'react-router-dom';
import Cookies from 'react-cookie/cjs/Cookies';


const Welcome:React.FC = () => {
    const [navigate, setNavigate] = useState(false);
    const [cookie, setCookie] = useState(new Cookies());
    const [sendToHome, setsendToHome] = useState(false);

    const isLoggedIn = () => {
        if(cookie.get('token') !== null && cookie.get('token') !== undefined) {
            setsendToHome(!sendToHome);
        }else {
            return;
        }
    }

    return (
        <>
            <div onLoad={isLoggedIn} className="container bg-cover w-full h-full bg-repeat border-b-8 border-[#272525]" style={{backgroundImage : `linear-gradient(to top,rgba(0,0,0,.9)0, rgba(0,0,0,.3)60%, rgba(0,0,0,.3)70%, rgba(0,0,0,.9)100%), url(${background})`, backgroundSize: `100%`}}>
                <div className=" flex flex-row gap-logo-sign py-9">
                    <img src={logo} alt="Megaflix logo" className=' mx-14 hover:cursor-pointer' />
                    <button className=' bg-red-600 p-0 text-white font-semibold text-lg rounded w-[6%] h-[5vh]' onClick={() => setNavigate(!navigate)}>Sign In</button>
                    {navigate && <Navigate replace to='/signin' />}
                </div>
                <HomeDiscription />
                <GetStarted />
            </div>
            <EnjoyOnYourTv />
            <DownloadToWatchOffline />
            <WatchEveryWhere />
            <ProfileForKids />
            <Faq />
            <Footer />
            {sendToHome && <Navigate replace to='/home' />}
        </>
    );
}

export default Welcome;