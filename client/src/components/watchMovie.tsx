import React from 'react';

interface idType{
    trailerUrl:string,
    title:string
}

const WatchMovie = (movie: idType) => {
    console.log('even here we are why is not working ???');
    return (
        <div className=' m-auto absolute w-full h-[100vh] z-30 bg-[#ffffff63]'>
            <iframe width="700" height="576" src={`https://www.youtube.com/embed/${movie.trailerUrl}`} title={movie.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default WatchMovie;