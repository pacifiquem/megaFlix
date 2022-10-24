import axios from 'axios';
import React, {useState} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';
import { Navigate } from 'react-router-dom';
import background from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import Copyright from '../components/copyright';
import {toast, ToastContainer} from 'react-toastify';
import { useCookies } from 'react-cookie';
import usersUrls from '../utils/usersBaseUrl';


const SignIn:React.FC = () => {

    const [navigate, setNavigate] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [homeNavigate, setNomeNavigate] = useState(false);
    const [cookies, setCookie] = useCookies(['token']);

    const showError = (errormessage: any) => {
        return toast.error(`${errormessage}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSignin = (e:any) => {
        e.preventDefault();
        
        if(email !== null && password !== null) {
            axios.post(`${usersUrls.baseUrl}/login`, {
                email, 
                password
            }).then((response) => {
                if(response.data.data.success === true) {
                    setCookie('token', response.data.data.data, {
                        expires: new Date(new Date().setDate(new Date().getDate() + 30))
                    });
                    setNomeNavigate(!homeNavigate);
                }else {
                    showError('Invalid email or password');
                }
            }).catch((error) =>{
                showError(error.message);
            })
        }else {
            showError('please input email and password');
        }
    }

    return (
        <div className="container bg-cover w-full h-[100vh] p-8" style={{backgroundImage : `linear-gradient(to top,rgba(0,0,0,.6)0, rgba(0,0,0,.5)60%, rgba(0,0,0,.5)70%, rgba(0,0,0,.6)100%), url(${background})`}}>
        <img src={logo} alt="Megaflix logo" />
        <div className='w-[32%] h-[85%] bg-[#000000c5] mx-auto mt-6 mb-4 py-14 px-14'>
            <h1 className='text-start text-white text-4xl font-semibold mb-12'>Sign In</h1>
            <form action="" method="post" onSubmit={handleSignin} className='w-[100%] h-[75%] mt-12'>
                <div className='w-[100%] h-[13%] flex flex-row bg-red-600 mb-6 rounded'>        
                    <AiOutlineMail className='w-[15%] h-[60%]  mt-3' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required className='w-[85%] h-[100%] outline-none px-8 rounded-r'/>
                </div>
                <div className='w-[100%] h-[13%] flex flex-row bg-red-600 mb-6 rounded'>     
                    <BiLock className='w-[15%] h-[60%]  mt-3' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required className='w-[85%] h-[100%] outline-none px-8 rounded-r'/>
                </div>
                <button type='submit' className=' bg-red-600 w-[100%] h-[15%] font-sans font-semibold text-white text-2xl rounded'>Sign In</button>
                {
                    homeNavigate && <Navigate replace to='/home?welcome' />
                }
                <p className='text-[#4e4e4e] mt-12 text-lg'>New To Netflix ? <span className='text-white hover:cursor-pointer' onClick={() => setNavigate(!navigate)}>Sign Up</span></p>
                {navigate && <Navigate replace to='/signup' />}
                <p className='text-[#4e4e4e] mt-2'>This page is protected by reCAPTCHA to ensure you are not a bot .</p>
            </form>
            <ToastContainer closeOnClick pauseOnFocusLoss newestOnTop={false} />
        </div>
        <Copyright />
    </div>
    )
}

export default SignIn;