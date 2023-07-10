import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

export default function fetchMovieDetails(movie_id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`)
    .then(response => response.data);
}
