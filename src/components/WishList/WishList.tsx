/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { request } from 'http';
import React, { FC, useState } from 'react';
import axios from '../../axios';
import Navbar from '../Navbar';
import {IoPlay, IoThumbsUpOutline, IoThumbsDownOutline, IoTrashBin} from "react-icons/io5";



const WishList: FC = () => {

    let [movies, setMovies] = useState<any>([]);

    // let movie:any = [];


    // console.log(localStorage.length);

    async function fetchMovie(){


    for (let i = 1; i <=localStorage.length; i++) {
        console.log(localStorage.getItem(i.toString()));  
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${localStorage.getItem(i.toString())}?api_key=${process.env.REACT_APP_API_KEY}`);
         movies[i] = request.data;
    }

    console.log(movies);
    }

    fetchMovie();
    
    return (
        <div className='homepage'>
            
            <Navbar />

            <div className='wishlist'>
                 <h1> My Movie Wish List</h1>
             
             {movies.map((movie:any, key:number) => (
                <div className='wishlist_content'>
                    <div className='wishlist_content_image'>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='img_wishlist content_alignement' alt="" />
                     <div className='wishlist_button'>
                        <button className="movie_banner_button movie_banner_btn_align"> 
                            <IoPlay className='movie_banner_btn_align play_icon'/> 
                            <span className='movie_banner_btn_align'> Lecture </span>  
                        </button>
                        <button className='modal_no_button'> <IoTrashBin className='movie_banner_button_2 movie_banner_btn_align'/> </button>
                        <button className='modal_no_button'> <IoThumbsUpOutline className='movie_banner_button_2 movie_banner_btn_align'/> </button>
                        <button className='modal_no_button'> <IoThumbsDownOutline className='movie_banner_button_2 movie_banner_btn_align'/> </button>
                              
                        </div>
                    </div>
                    <div className='wishlist_content_info'>
                       
                        <h2> {movie.title} </h2>
                        <p className='info_wishlist'> {movie.tagline} </p>
                        <p className='info_wishlist'> {movie.overview} </p>    
                    </div>
                </div>        
                ))}
            </div>           
        </div>
      
    )
}


export default WishList