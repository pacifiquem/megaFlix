import React,  { useState } from 'react';
import aboutMovies from '../utils/aboutMovies';

interface props {
    imageUrl: string,
    id:Number,
}

const ListOfMovies:React.FC <props> = (props) => {

    const [movie_id, setMovie_id] = useState(0);
    const [movieUrl, setMovieUrl] = useState(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${aboutMovies.API_KEY}&language=en-US`);

    return (
        <div className='w-[20%] h-[20vh] hover:w-[21%] hover:h-[21.5vh] hover:cursor-pointer rounded' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.imageUrl})`, backgroundSize: `100% 100%`}}>
        </div>
    )
}

export default ListOfMovies;