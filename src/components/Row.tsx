import React, { useState, useEffect} from 'react';
import { css, cx } from '@emotion/css'
import axios from '../axios'

interface Props {
    title : string,
    fetchUrl:string,
    isLarge:boolean
};

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title,fetchUrl, isLarge}: Props) => {
    const [movies, setMovies] = useState<any>([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    // console.log(movies);

    return (
        <div className='row'>
          <h2> {title} </h2>
          <div className="row_posters">
              {movies.map((movie:any) => (
                  <img className={`row_poster ${isLarge && "row_posterLarge"}`}
                  key={movie.id} 
                  src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                  alt={movie.name}/>
              ))}
          </div>
        </div>
    ) 
}

export default Row