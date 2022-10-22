import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Url from 'url-parse';
import aboutUrl from '../utils/aboutMovies';
import axios from 'axios';
import ListOfMovies from '../components/listOfMovies';


const WatchMovie:React.FC = () => {

    const url = new Url(window.location.href, {
        parse: true
    });

    let filteredUrl = url.query.replace('?', '').split('&');

    const [currentMovie, setCurrentMovie] = useState<any>(null);
    const [relatedMoviesUrl, setRelatedMovieUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=${aboutUrl.API_KEY}&with_genres=${filteredUrl[1].split('=')[1]}`);
    const [currentMovieUrl, setCurrentMovieUrl] = useState(`http://api.themoviedb.org/3/movie/${filteredUrl[0].split('=')[1]}/videos?api_key=${aboutUrl.API_KEY}`);
    const [movie_url, setMovieUrl] = useState('');
    const [related_movies, setRelatedMovies] = useState([]);

    useEffect(() => {
        axios.get(currentMovieUrl).then((response) => {
            console.log(response);
            response.data.results.map((movie:any) => {
                if(movie.type === "Trailer") {
                    setMovieUrl(`https://www.youtube.com/embed/${movie.key}`);
                    setCurrentMovie(movie);
                    return;
                }
            })
        });

        axios.get(relatedMoviesUrl).then((response) => {
            response.data.results ? setRelatedMovies(response.data.results.slice(0, 3)) : console.log('results not found');
        });

    }, []);

    return (
        <div>
            <Nav />
            <div className='flex gap-[2%] w-full h-[90] pt-8 overflow-y-hidden'>
                <div className='w-[73%] h-[100%]'>
                    <div className='w-[100%] flex justify-center items-center'>
                        <iframe width="90%" height="550" src={movie_url} title="Introduction to Coding" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='w-[90%] m-auto gap-[2%] text-white'>
                        <div className='w-[25%] p-3' style={{backgroundImage: `url(${currentMovie?.backdrop_path})`, backgroundSize: '100%'}}></div>
                        <div className='ml-6'>
                            <p className=' textwhite text-xl'>Name: <span className='text-gray-500 text-xl'> {currentMovie?.name}</span></p>
                            <p className='text-white text-xl'>Type: <span className='text-gray-500 text-xl'> {currentMovie?.type}</span></p>
                            <p className='text-white text-xl'>Source: <span className='text-gray-500 text-xl'> {currentMovie?.site}</span></p>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] h-[100%] flex flex-col gap-[1vh] mb-12'>
                    <div className='w-[75%] text-center bg-[#ffffff1f] mb-1 text-white text-2xl rounded-md border-solid border-white'>Related Movies</div>
                    {
                        related_movies.map((movie:any) => {
                            return <ListOfMovies type={movie.genre_ids}  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} width="75%" height='23vh' />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;