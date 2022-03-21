/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import axios from '../Requests/Axios';
import '../Styles/sRow.css';
import MovieTile from './MovieTile';

export default function Row(props: { title: string , fetchUrl: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, fetchUrl } = props;
    const [movies, setMovies] = React.useState([]);
    
    useEffect (() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response;
            }
            fetchData();
        }, [fetchUrl]);

    return (
        <div className="div-row">
            <h2>{props.title}</h2>

            <div className="row">
                {movies.map((movie: any) => (
                    <MovieTile movie={movie}/>
                ))}
            </div>
        </div>
    );
}