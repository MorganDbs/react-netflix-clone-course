/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import axios from '../Requests/Axios';
import '../Styles/sRow.css';
import MovieTile from './MovieTile';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    runtime: number;
    adult: boolean;
    genres: any[];
    production_companies: any[];
}

const defaultMovie = {
    id: 0,
    title: "",
    backdrop_path: "",
    overview: "",
    release_date: "",
    runtime: 0,
    adult: false,
    genres: [""],
    production_companies: [""],
}


export default function TenPopular(props: { title: string , fetchUrl: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, fetchUrl } = props;
    const [movies, setMovies] = React.useState([defaultMovie]);
    const scrl = useRef<HTMLHeadingElement>(null);
    const [scrollX, setscrollX] = React.useState(0);
    let count = 1;
    
    useEffect (() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            get10Movies(response.data.results);
            return response;
            }
            fetchData();
        }, [fetchUrl]);

    const get10Movies = (results : Movie[]) => {
        var movies: Movie[] = [];
        for (let i = 0; i < results.length; i++) {
            if (i < 10) {
                movies.push(results[i]);
            }
        }
        setMovies(movies);
    }
    
    const slide = (shift: number) => {
        if(scrl.current !== null) {
            scrl.current.scrollLeft += shift;
            setscrollX(scrollX + shift);
        }
      };

    return (
        <div className="div-row">
            <h2>{title}</h2>

            <div className="row-poster">
                <button
                  className="prev"
                  onClick={() => slide(-800)}>
                  <ArrowBackIosIcon sx={{color: 'white'}}/>
                </button>
                <div className="row-poster" ref={scrl}>
                    {movies.map((movie: any) => (
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <span className="numbers">{count++}</span>
                            <MovieTile movie={movie} type={"poster"}/>
                        </Box>
                    ))}
                </div>
                <button
                  className="next"
                  onClick={() => slide(+800)}>
                    <ArrowForwardIosIcon sx={{color: 'white'}}/>
                </button>
            </div>
        </div>
    );
}