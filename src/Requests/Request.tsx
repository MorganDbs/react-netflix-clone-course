/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */

const API_KEY = process.env.REACT_APP_API_KEY;
const API_LANGUAGE = 'fr-FR';

const Requests = {

    //film
    mostPopular: `/movie/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desc&page=1`,
    trending: `/trending/all/week?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`,
    romantic: `/discover/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desc&page=1&with_genres=10749`,
    scienceFiction: `/discover/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desc&page=1&with_genres=878`,

    //serie
    mostPopularSeries: `/tv/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`,
    topRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`,
    romanticSeries: `/discover/tv?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desce&page=1&with_genres=10749`,
    animeSeries: `/discover/tv?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desce&page=1&with_genres=16`,
    bannerSeries: `/tv/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`,

    //genre
    genre: `/discover/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&sort_by=popularity.desc&page=1&with_genres=`,

}

export default Requests;
