import React from 'react';


interface props {
    imageUrl: string,
    iframeUrl: string,
}

const ListOfMovies:React.FC <props> = (props) => {
    return (
        <div className='w-[21vw] h-[21vh] hover:w-[22vw] hover:h-[21.5vh] rounded' style={{backgroundImage: `url(${props.imageUrl})`, backgroundSize: `100% 100%`}}>
        </div>
    )
}

export default ListOfMovies;