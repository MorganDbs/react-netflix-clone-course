/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import axios from '../../axios';
import requests from '../../requests';


const Banner = () => {

    const [movie, setMovie] = useState<any>([]); 

    useEffect(() => {
        async function fetchData(){
             const request = await axios.get(requests.fetchNetflixOriginals);
             setMovie(request.data.results[
                 Math.floor(Math.random() * request.data.results.length)
             ])
             return request;
        }
        fetchData();       
    }, [])

    // console.log(movie);

    return (
        <header className='banner'
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Lire</button>
                    <button className="banner_button">Ma liste</button>
                </div>
                <h3 className="banner_description">
                    {movie?.overview}
                </h3>
            </div>   
            <div className="banner_fadeBottom"/>
        </header>
    )
}


export default Banner