import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ListOfMovies from "./listOfMovies";
import { Carousel } from 'react-responsive-carousel';
import Copyright from "./copyright";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import requests from "../utils/MoviesUrls.util";

interface movie {
    backdrop_path: string,
    id: number;
}

const Movies:React.FC = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topTrending, setTopTrandingdMovies] = useState([]);
    const [actionsMovies, setActionMovies] = useState([]);
    const [romanticMovies, setRomanticdMovies] = useState([]);
    const [comicMovies, setComicdMovies] = useState([]);
    const [documentaries, setDocumentary] = useState([]);
    const [topHorrorMovies, setHorrordMovies] = useState([]);
    const [netflixOriginal, setNetflixOriginal] = useState([]);


    useEffect(() => {
        axios.get(requests.fetchTopRated).then((response) => {
            setTopRatedMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(requests.fetchTrending).then((response) => {
            setTopTrandingdMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(requests.fetchActionMovies).then((response) => {
            setActionMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(requests.fetchNetflixOriginals).then((response) => {
            setNetflixOriginal(response.data.results);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(requests.fetchTopRated).then((response) => {
            setTopRatedMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(requests.fetchDocumentaries).then((response) => {
            setDocumentary(response.data.results);
        }).catch((error) => {
            console.log(error);
        })

        axios.get(requests.fetchComedyMovies).then((response) => {
            setComicdMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        })

        axios.get(requests.fetchHorrorMovies).then((response) => {
            setHorrordMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        })

        axios.get(requests.fetchRomanceMovies).then((response) => {
            setRomanticdMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const carousel1div1Movies = topRatedMovies.slice(0, 5);
    const carousel1div2Movies = topRatedMovies.slice(6, 11);
    const carousel1div3Movies = topRatedMovies.slice(12, 17);

    const carousel2div1Movies = topTrending.slice(0, 5);
    const carousel2div2Movies = topTrending.slice(6, 11);
    const carousel2div3Movies = topTrending.slice(12, 17);

    const carousel3div1Movies = netflixOriginal.slice(0, 5);
    const carousel3div2Movies = netflixOriginal.slice(6, 11);
    const carousel3div3Movies = netflixOriginal.slice(12, 17);

    const carousel4div1Movies = actionsMovies.slice(0, 5);
    const carousel4div2Movies = actionsMovies.slice(6, 11);
    const carousel4div3Movies = actionsMovies.slice(12, 17);

    const carousel5div1Movies = comicMovies.slice(0, 5);
    const carousel5div2Movies = comicMovies.slice(6, 11);
    const carousel5div3Movies = comicMovies.slice(12, 17);

    const carousel6div1Movies = romanticMovies.slice(0, 5);
    const carousel6div2Movies = romanticMovies.slice(6, 11);
    const carousel6div3Movies = romanticMovies.slice(12, 17);

    const carousel7div1Movies = topHorrorMovies.slice(0, 5);
    const carousel7div2Movies = topHorrorMovies.slice(6, 11);
    const carousel7div3Movies = topHorrorMovies.slice(12, 17);

    const carousel8div1Movies = documentaries.slice(0, 5);
    const carousel8div2Movies = documentaries.slice(6, 11);
    const carousel8div3Movies = documentaries.slice(12, 17);

    return (    
        <div className=" py-6 px-4 z-10 mt-[92vh] pl-20">
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Top Trending</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel2div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel2div2Movies.map((movie:movie) => {
                                    return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel2div3Movies.map((movie:movie) => {
                                    return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Top Rated</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel1div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel1div2Movies.map((movie:movie) => {
                                return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel1div3Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Netflix Original</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel3div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel3div2Movies.map((movie:movie) => {
                                    return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel3div3Movies.map((movie:movie) => {
                                    return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Action Movies</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel4div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel4div2Movies.map((movie:movie) => {
                                    return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel4div3Movies.map((movie:movie) => {
                                    return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Comic Movies</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel5div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel5div2Movies.map((movie:movie) => {
                                return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel5div3Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Romance Movies</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel6div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel6div2Movies.map((movie:movie) => {
                                    return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel6div3Movies.map((movie:movie) => {
                                    return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div>
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Horror Movies</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel7div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel7div2Movies.map((movie:movie) => {
                                    return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel7div3Movies.map((movie:movie) => {
                                    return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <div className=" mb-12">
                <h1 className=" text-white text-3xl mb-4 font-sans font-semibold">Documentaries</h1>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} transitionTime={500}>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel8div1Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel8div2Movies.map((movie:movie) => {
                                return <ListOfMovies key={movie.id} imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                    <div className="flex gap-[1%] flex-row">
                        {
                            carousel8div3Movies.map((movie:movie) => {
                                return <ListOfMovies  key={movie.id}  imageUrl={movie.backdrop_path} id={movie.id} />
                            })
                        }
                    </div>
                </Carousel>
            </div>
            <Copyright />
        </div>
    );

}


export default Movies;