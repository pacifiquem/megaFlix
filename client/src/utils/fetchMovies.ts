import dotenv from 'dotenv';
import path from 'path';

const pathToEnv:string = path.join(__dirname, '..', '/config/.env');
console.log(pathToEnv);
dotenv.config({path: pathToEnv});


const API_KEY = process.env.API_KEY;


const requests = {
  fetchTrending: `${process.env.BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${process.env.BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${process.env.BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests;