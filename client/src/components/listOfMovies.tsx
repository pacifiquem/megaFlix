import React, { useState } from 'react';
import {
    Navigate,
  } from 'react-router-dom';

interface props {
    imageUrl: string;
    id:Number;
    type:number[];
    width ?: string;
    height ?: string;
    overview ?: string;
}

const ListOfMovies:React.FC <props> = (props) => {

    const [navigate, setNavigate] = useState(false);
    const [url] = useState(`/watch?id=${props.id}&genre=${props.type[0]}&overview=${props?.overview}`);

    const sendToWatchMovie = () => {
        setNavigate(!navigate);
    }

    return (
        <>
            <div className='w-[20%] h-[20vh] hover:w-[21%] hover:h-[21.5vh] hover:cursor-pointer rounded' onClick={sendToWatchMovie} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.imageUrl})`, backgroundSize: `100% 100%`, width: props?.width, height: props?.height}}>
            </div>
            { navigate && <Navigate replace to={url} /> }
        </>
    );
}

export default ListOfMovies;