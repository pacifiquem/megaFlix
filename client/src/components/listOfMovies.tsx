import axios from 'axios';
import React,  { useState } from 'react';
import aboutMovies from '../utils/aboutMovies';
import WatchMovie from './watchMovie';

interface props {
    imageUrl: string,
    id:Number,
}

const ListOfMovies:React.FC <props> = (props) => {

    const [movie_id, setMovie_id] = useState('');
    const [movie_title, setMovie_title] = useState('');
    const [showMovie, setShowMovie] = useState(false);
    const [movieUrl] = useState(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${aboutMovies.API_KEY}&language=en-US`);

    const FetchMovie = () => {

        axios.get(movieUrl).then((response) => {
            response.data.results.map((video: any) => {
                if(video.type === "Trailer") {
                    setMovie_id(video.key);
                    setMovie_title(video.name);
                    setShowMovie(!showMovie);
                }
            })
        }).catch((error) => {
            console.log(error);
        });

    }


    return (
        <div className='w-[20%] h-[20vh] hover:w-[21%] hover:h-[21.5vh] hover:cursor-pointer rounded' onClick={ FetchMovie } style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.imageUrl})`, backgroundSize: `100% 100%`}}>
            {
                <WatchMovie trailerUrl={movie_id} title={movie_title} /> && showMovie
            }
        </div>
    );
}

export default ListOfMovies;