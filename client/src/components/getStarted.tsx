import axios from 'axios';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import usersUrls from '../utils/usersBaseUrl';


const GetStarted:React.FC = () => {

    const [email, setEmail] = useState('');
    const [navigateToSignin, setNavigateToSignin] = useState(false);
    const [navigateToSignup, setNavigateToSignup] = useState(false);

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

    const checkMembership = () => {
        if(email !== '') {

            axios.post(`${usersUrls.baseUrl}/issignedup`, {
                email
            }).then((response) => {
                if(response.data.success === true) {
                    setNavigateToSignin(!navigateToSignin);
                }else {
                    setNavigateToSignup(!navigateToSignup);
                }
            }).catch((error) => {
                showError(error.message);
            });

        }else {
            showError('Email can\'t be empty');
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className=' text-xl font-normal mt-6 mb-4 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='w-[50vw] h-[9.5vh] flex flex-row mx-auto border-solid border border-gray-800 rounded'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required className=' h-[100%] bg-white w-[70%] outline-none p-5 font-sans text-xl' />
                <button className=' h-[100%] bg-red-600 w-[30%] font-sans font-normal text-white text-3xl' onClick={checkMembership}>Get Started &gt;</button>
                { navigateToSignin && <Navigate replace to="signin" /> }
            </div>
            <ToastContainer closeOnClick pauseOnFocusLoss newestOnTop={false} />
            { navigateToSignup && <Navigate replace to='signup' /> }
        </div>
    );
}

export default GetStarted;