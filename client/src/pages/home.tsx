import React, { useState } from 'react';
import Nav from '../components/nav';
import DefaultMovie from '../components/defaultMovie';
import Movies from '../components/movies';
import { Cookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';


const Home:React.FC = () => {

    const [cookie, setCookie] = useState(new Cookies());
    const [sendToLogin, setSendToLogin] = useState(false);

    const isLoggedIn = () => {
        if(cookie.get('token') === null || cookie.get('token') === undefined) {
            setSendToLogin(!sendToLogin);
        }else {
            return;
        }
    }

    return (
        <div onLoad={isLoggedIn}>
            <Nav />
            <DefaultMovie />
            <Movies />
            { sendToLogin && <Navigate replace to='/signin' /> }
        </div>
    );
}

export default Home;