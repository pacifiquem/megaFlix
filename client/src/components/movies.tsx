import React from "react";
import ListOfMovies from "./listOfMovies";
import { Carousel } from 'react-responsive-carousel';
import Copyright from "./copyright";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const movies:React.FC = () => {

    return (    
        <div className=" py-6 px-4 z-10 mt-[92vh] pl-20">
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Top Rated & Top Trending</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Netflix Original</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Action Movies</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Comic Movies</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Romance Movies</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Horror Movies</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <div className=" mb-12">
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Documentaries</h1>
                <Carousel showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex flex-row gap-[.5%]">
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                    <div className="flex flex-row gap-[.5%]">
                    <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=1" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                        <ListOfMovies imageUrl="https://picsum.photos/500/300?random=10" iframeUrl="https://picsum.photos/500/300?random=1" />
                    </div>
                </Carousel>
            </div>
            <Copyright />
        </div>
    );

}


export default movies;