import React, { useState, useEffect} from 'react';
import { css, cx } from '@emotion/css'
import axios from '../axios'
import Modal from './Homepage/Modal';
import ModalContent from './Homepage/ModalContent';

interface Props {
    title : string,
    fetchUrl:string,
    isLarge:boolean
};



const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title,fetchUrl, isLarge}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [movies, setMovies] = useState<any>([]);
    const [movie, setMovie] = useState<any>([]);
    let movieId:any;

    //recup un film au clic sur son image
    async function fetchMovie(movieId:any){
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
        console.log(request.data);
        setMovie(request.data);
        return request;
    }

    //récup liste de films pour les rows
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    },[fetchUrl]);

    return (
        
        <div className='row'>
          <h2> {title} </h2>
          <div className="row_posters">
              {movies.map((movie:any) => (
                  <img className={`row_poster ${isLarge && "row_posterLarge"}`}
                  key={movie.id} 
                  src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                  onClick={()=>{setModalOpen(true);
                    movieId=movie.id;
                    fetchMovie(movie.id);
                }}
                  alt={movie.name}/>
              ))}
          </div>
          
          <Modal modalOpen={modalOpen}>
                {/* <ModalContent setModalOpen={setModalOpen} movie={setMovie}/> */}
                <div className="modal_content">
                    <div>
                        <div className="div_btnClose">
                            <button type="button" className="btn_modalContent" onClick={()=>
                                {setModalOpen(false);
                                setMovie([])}}> X </button>
                        </div>
                        <header className='banner'
                    style = {{
                        backgroundSize: "cover",
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundPosition: "center center",
                    }}>
                        <div className="banner_contents">
                            <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name} </h1>
                            <div className="banner_buttons">
                                <button className="banner_button">Lecture </button>
                                <button className="banner_button">Ma liste</button>
                            </div>
                            {/* <h3 className="banner_description">
                                {movie?.overview}
                            </h3> */}
                        </div>   
                        <div className="banner_fadeBottom"/>
                    </header>
                    {/* <p> {movie}</p> */}
                    </div>

                        <p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p>
                        <p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p>
                   </div>
            </Modal>
        </div>
    ) 
}

export default Row