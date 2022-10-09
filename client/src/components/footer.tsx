import React from 'react';
import Copyright from './copyright';


const Footer:React.FC = () => {
    return (
        <div>
            <div className='h-[40vh] w-full flex flex-row justify-center items-center'>
                <div className='flex flex-col items-start gap-[5%] text-[#4e4e4e] w-[20%] h-[80%]'>
                    <p className=' hover:underline cursor-pointer text-lg font-medium'>Question ? Contact us</p>
                    <p className=' hover:underline cursor-pointer mt-3'>FAQ</p>
                    <p className=' hover:underline cursor-pointer'>Investor Relations</p>
                    <p className=' hover:underline cursor-pointer'>Privacy</p>
                    <p className=' hover:underline cursor-pointer'>Speed Test</p>
                    <p className=' hover:underline cursor-pointer'>MegaFlix Rwanda</p>
                </div>
                <div className='flex flex-col items-start gap-[5%] text-[#4e4e4e] w-[20%] h-[80%]'>
                    <p className=' hover:underline cursor-pointer mt-14'>Help Center</p>
                    <p className=' hover:underline cursor-pointer'>Jobs</p>
                    <p className=' hover:underline cursor-pointer'>Cookie Preferences</p>
                    <p className=' hover:underline cursor-pointer'>Legal Notices</p>
                </div>
                <div className='flex flex-col items-start gap-[5%] text-[#4e4e4e] w-[20%] h-[80%]'>
                    <p className=' hover:underline cursor-pointer mt-14'>Account</p>
                    <p className=' hover:underline cursor-pointer'>Ways to Watch</p>
                    <p className=' hover:underline cursor-pointer'>Corporate Information</p>
                    <p className=' hover:underline cursor-pointer'>Only on MegaFlix</p>
                </div>
                <div className='flex flex-col items-start gap-[5%] text-[#4e4e4e] w-[20%] h-[80%]'>
                    <p className=' hover:underline cursor-pointer mt-14'>Media Center</p>
                    <p className=' hover:underline cursor-pointer'>Terms of Use</p>
                    <p className=' hover:underline cursor-pointer'>Contact Us</p>
                </div>
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;