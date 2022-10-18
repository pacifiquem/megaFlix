import React from 'react';


interface props {
    imageUrl: string,
    id:Number,
}

const ListOfMovies:React.FC <props> = (props) => {
    console.log(props);
    return (
        <div className='w-[20%] h-[20vh] hover:w-[21%] hover:h-[21.5vh] hover:cursor-pointer rounded' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.imageUrl})`, backgroundSize: `100% 100%`}}>
        </div>
    )
}

export default ListOfMovies;