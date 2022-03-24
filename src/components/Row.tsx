import React, { useState, useEffect} from 'react';
import axios from '../axios'
import Modal from './Homepage/Modal';
import { IoCloseCircleSharp, IoAddCircleOutline, IoPlay, IoThumbsUpOutline, IoThumbsDownOutline} from "react-icons/io5";

interface Props {
    title : string,
    fetchUrl:string,
    isLarge:boolean,
    isSerie:boolean
};

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title,fetchUrl, isLarge, isSerie}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [movies, setMovies] = useState<any>([]);
    const [movie, setMovie] = useState<any>([]);
    const [serie, setSerie] = useState<any>([]);

    //recup un film au clic sur son image
    async function fetchMovie(movieId:number){
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
        console.log(request.data);
        setMovie(request.data);
        return request;
    }

    async function fetchSerie(movieId:number){
        const request = await axios.get(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
        // console.log(request.data);
        setSerie(request.data);
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
                    if (!isSerie) fetchMovie(movie.id);
                    else fetchSerie(movie.id);
                }}
                  alt={movie.name}/>
              ))}
          </div>
          
          <Modal modalOpen={modalOpen}>                
                <div className="modal_content">
                    
                {isSerie === false &&
                    <div>
                        <div className="div_btnClose">
                            <button type="button" className="btn_modalContent" onClick={()=>
                                {setModalOpen(false);
                                setMovie([])}}> < IoCloseCircleSharp className='movie_banner_button_2' /> </button>
                        </div>
                        <header className='banner'
                            style = {{
                                backgroundSize: "cover",
                                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                                backgroundPosition: "center center",
                            }}>
                            <div className="movie_banner_contents">
                                <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name} </h1>
                                <div className="banner_buttons">
                                    <button className="movie_banner_button movie_banner_btn_align"> 
                                     <IoPlay className='movie_banner_btn_align play_icon'/> 
                                     <span className='movie_banner_btn_align'> Lecture </span>  
                                    </button>
                                    <IoAddCircleOutline className='movie_banner_button_2 movie_banner_btn_align'/>
                                    <IoThumbsUpOutline className='movie_banner_button_2 movie_banner_btn_align'/>
                                    <IoThumbsDownOutline className='movie_banner_button_2 movie_banner_btn_align'/>
                                </div>
                            </div>   
                            <div className="banner_fadeBottom"/>
                        </header>
                                               
                        <div className='movie_details'> 
                            <div className='movie_details_item1'>
                                <p className='movie_details_runtime'> {movie?.runtime} minutes </p>
                                <p className='movie_details_overview'> {movie?.overview}</p>
                            </div>
                            <div className='movie_details_item2'>
                               <p className='movie_details_tagline'> {movie?.tagline} </p>
                               <p className='movie_details_releaseDate'> {movie?.release_date} </p>
                            </div>
                        </div>
                    </div>
                    }
                    
                    {isSerie === true && 
                    <div>
                        <div>
                            <div className="div_btnClose">
                                <button type="button" className="btn_modalContent" onClick={()=>
                                    {setModalOpen(false);
                                    setSerie([])}}> X </button>
                            </div>
                            <header className='banner'
                                style = {{
                                    backgroundSize: "cover",
                                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${serie?.backdrop_path}")`,
                                    backgroundPosition: "center center",
                                }}>
                                <div className="movie_banner_contents">
                                    <h1 className='movie_banner_title'> {serie?.title || serie?.name || serie?.original_name} </h1>
                                    <div className="movie_banner_buttons">
                                        <button className="movie_banner_button">Lecture </button>
                                        <button className="movie_banner_button">Ma liste</button>
                                    </div>
                                    {/* <h3 className="banner_description">
                                        {serie?.overview}
                                    </h3> */}
                                </div>   
                                <div className="banner_fadeBottom"/>
                            </header>
                        </div>
                    </div>
                    }
                        {/* <p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p>
                        <p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p><p> This is cool </p> */}
                   </div>
            </Modal>
        </div>
    ) 
}

export default Row