import axios from 'axios';
import React, {useState} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
import background from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import Copyright from '../components/copyright';
import { Navigate } from 'react-router-dom';


const Signup:React.FC = () => {

    const [navigate, setNavigate] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formHandler = (event:any) => {
        event.preventDefault();
        if(username !== null && email !== null && password !== null) {
            axios.post('https://atmegaflix.herokuapp.com/user/signup' , {
                username,
                email, 
                password
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className="container bg-cover w-full h-[100vh] p-8" style={{backgroundImage : `linear-gradient(to top,rgba(0,0,0,.6)0, rgba(0,0,0,.5)60%, rgba(0,0,0,.5)70%, rgba(0,0,0,.6)100%), url(${background})`}}>
            <img src={logo} alt="Megaflix logo" />
            <div className='w-[32%] h-[85%] bg-[#000000c5] mx-auto mt-6 mb-4 py-14 px-14'>
                <h1 className='text-start text-white text-4xl font-semibold mb-12'>Sign Up</h1>
                <form onSubmit={formHandler} className='w-[100%] h-[75%]'>
                    <div className='w-[100%] h-[13%] flex flex-row bg-red-600 mb-6 rounded'>        
                        <FiUser className='w-[15%] h-[60%] mt-3' />
                        <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder='Username' required className='w-[85%] h-[100%] outline-none px-8 rounded-r'/>
                    </div>
                    <div className='w-[100%] h-[13%] flex flex-row bg-red-600 mb-6 rounded'>        
                        <AiOutlineMail className='w-[15%] h-[60%]  mt-3' />
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' required className='w-[85%] h-[100%] outline-none px-8 rounded-r'/>
                    </div>
                    <div className='w-[100%] h-[13%] flex flex-row bg-red-600 mb-6 rounded'>     
                        <BiLock className='w-[15%] h-[60%]  mt-3' />
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' required autoComplete='true' className='w-[85%] h-[100%] outline-none px-8 rounded-r'/>
                    </div>
                    <button type='submit' className=' bg-red-600 w-[100%] h-[15%] font-sans font-semibold text-white text-2xl rounded'>Sign Up</button>
                    <p className='text-[#4e4e4e] mt-12 text-lg'>not New To Netflix ? <span className='text-white hover:cursor-pointer' onClick={() => setNavigate(!navigate)}>Sign In</span></p>
                    {navigate && <Navigate replace to='/signin' />}
                    <p className='text-[#4e4e4e] mt-2'>This page is protected by reCAPTCHA to ensure you are not a bot .</p>
                </form>
            </div>
            <Copyright />
        </div>
    );
}



export default Signup;