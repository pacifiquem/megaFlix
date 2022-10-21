import axios from 'axios';
import React, { useState } from 'react';
import {
    Routes,
    Route,
    Link,
    Navigate,
  } from 'react-router-dom';
import aboutMovies from '../utils/aboutMovies';

interface props {
    imageUrl: string,
    id:Number,
    type:number[]
}

const ListOfMovies:React.FC <props> = (props) => {

    const [navigate, setNavigate] = useState(false);
    const [url] = useState(`/watch?id=${props.id}&genre=${props.type[0]}`);

    const sendToWatchMovie = () => {
        setNavigate(!navigate);
    }

    return (
        <>
            <div className='w-[20%] h-[20vh] hover:w-[21%] hover:h-[21.5vh] hover:cursor-pointer rounded' onClick={sendToWatchMovie} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.imageUrl})`, backgroundSize: `100% 100%`}}>
            </div>
            { navigate && <Navigate replace to={url} /> }
        </>
    );
}

export default ListOfMovies;