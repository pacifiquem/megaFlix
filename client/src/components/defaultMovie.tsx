import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import { MovieRequests } from '../utils/fetchMovies';



const DefaultMovie:React.FC = () => {


    const [name, setName] = useState('');
    const [overview, setOverview] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [randomNumber, setRandomNumber]  = useState(Math.floor(Math.random() * 11));
    const [MovieRandomIndex, setMovieRandomIndex] = useState(Math.floor(Math.random() * (2 - 0) + 0));

    useEffect(() => {
        const movies = axios.get(MovieRequests[MovieRandomIndex]).then((response) => {
            response.data.results[randomNumber].title ? setName(response.data.results[randomNumber].title) : setName(response.data.results[randomNumber].name);
            console.log(response.data.results[randomNumber]);
            setOverview(response.data.results[randomNumber].overview);
            setImageUrl(`https://image.tmdb.org/t/p/original${response.data.results[randomNumber].backdrop_path}`);
        }).catch((error) => {
            console.log(error);
        })
    }, [MovieRandomIndex]);
    

    return (
        <div className='w-[100%] h-[95vh] pt-8 px-16 text-white absolute top-0 bg-no-repeat'  style={{backgroundImage: `linear-gradient(to top, rgb(0,0,0)0, rgba(0,0,0,.5)60%, rgba(0,0,0,.5)70%, rgba(0,0,0,.5)100%), url(${imageUrl})`, backgroundSize: `100% 100%`}}>
            <h1 className='text-[4rem] font-semibold mt-[9%]'>{name}</h1>
            <div  className='w-[45%] mb-12'>
                <p className='text-xl font-normal mt-6 mb-4'>{overview}</p>
            </div>
            <button className='w-[14%] bg-[#4c4848cf] hover:bg-[#3b393998] px-2 py-3 mb-12 text-2xl rounded'><FaPlay className='inline mr-2'/> Play</button>
            <button className='w-[14%] bg-[#b3b3b3dd] hover:bg-[#2a2828d0] px-2 py-3 mb-12 text-2xl ml-12 rounded'><BsInfoCircle className='inline mr-2'/> More Info </button>
        </div>
    );
}

export default DefaultMovie;