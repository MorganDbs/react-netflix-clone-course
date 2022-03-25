
const requests = {

    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,

    fetchSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`,
    fetchSeriesAction: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`,
    fetchSeriesComedy: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchSeriesHorror: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchSeriesRomance: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchSeriesDocumentaries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    fetchSeriesScienceFictions: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10765`,
    fetchSeriesDrama: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
    fetchSeriesMystery: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
    fetchSeriesPop: `/discover/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`,

}

export default requests;