import React from "react";
import tvImage from '../assets/images/tvImage.png';
import watchTV from '../assets/images/watchTV.png';
import kidsImage from '../assets/images/kidsImage.png';

export const EnjoyOnYourTv:React.FC = () => {
    return (
        <div className="w-[100vw] h-[60vh] border-b-8 border-[#272525] flex flex-col md:flex-row">
            <div className=' w-[50%] h-[100%] flex justify-center items-center'>
                <div className=" text-white w-[100%] md:w-[60%]">
                    <h1 className="mb-8 text-5xl font-semibold text-center md:text-start">Enjoy on your TV.</h1>
                    <h2 className="text-2xl font-normal my-3">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
            </div>
            <div className=" w-[50%] h-[100%] flex flex-row justify-center items-center">
                <div className=' w-[70%] h-[70%]'>
                    <img src={tvImage} alt="tvImage" />
                </div>
            </div>
        </div>
    );
}





export const DownloadToWatchOffline:React.FC = () => {
    return (
        <div className="w-[100vw] h-[60vh] border-b-8 border-[#272525] flex flex-row">
            <div className=" w-[50%] h-[100%] flex justify-center">
                <div className=' w-[45%] h-[55%] mt-20'>
                    <img src={watchTV} alt="watchTv" />
                </div>
            </div>
            <div className=' w-[50%] h-[100%] flex items-center'>
                <div className=" text-white w-[70%] ">
                    <h1 className="mb-8 text-5xl font-semibold">Download your shows to watch offline.</h1>
                    <h2 className="text-2xl font-normal my-3">Save your favorites easily and always have something to watch.</h2>
                </div>
            </div>
        </div>
    );
}





export const WatchEveryWhere:React.FC = () => {
    return (
        <div className="w-[100vw] h-[35vh] border-b-8 border-[#272525] flex items-center">
            <div className=" text-white pl-40 w-[45%]">
                <h1 className="mb-8 text-5xl font-semibold">Watch everywhere.</h1>
                <h2 className="text-2xl font-normal my-3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>
        </div>
    );
}




export const ProfileForKids:React.FC = () => {
    return (
        <div className="w-[100vw] h-[60vh] border-b-8 border-[#272525] flex flex-row">
            <div className=" w-[50%] h-[100%] flex justify-center">
                <div className=' w-[60%] h-[80%] mt-8'>
                    <img src={kidsImage} alt="Kids TV" className=" mt-6"/>
                </div>
            </div>
            <div className=' w-[50%] h-[100%] flex items-center'>
                <div className=" text-white w-[60%] ">
                    <h1 className="mb-8 text-5xl font-semibold inline-block w-[120%]">Create profiles for kids.</h1>
                    <h2 className="text-2xl font-normal my-3">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
        </div>
    )
}
