/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import '../Styles/sMovieTile.css';
import Dialog from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import request from '../Requests/Request';
import axios from '../Requests/Axios';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, deleteMovie } from '../features/user/userSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SameTile from '../Composants/SameTile';

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


export default function MovieTile(props: { movie: any, type: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { movie, type } = props;
    const [detailMovie, setDetailMovie] = React.useState(defaultMovie);
    const [open, setOpen] = React.useState(false);
    const [sameMovies, setSameMovies] = React.useState([defaultMovie]);
    const dispatch = useDispatch()
    const [openAlertValid, setOpenAlertValid] = React.useState(false);
    const [openAlertError, setOpenAlertError] = React.useState(false);
    const listUser = useSelector((state: any) => state.user.list);
    const connectedUser = useSelector((state: any) => state.user.connectedUser);
    var watchList: string | any[] = [];

    for(let i = 0; i < listUser.length; i++){
        if(listUser[i].id === connectedUser.id){
            watchList = listUser[i].watchList;
        }
    }

    const handleCloseModalCard = () => {
        setOpen(false);
      };

    const handleOpenModal = () => {
        setOpen(true);
      };

    const handleClickAlert = (movie: any) => {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].payload.id === movie.id) {
                dispatch(deleteMovie({payload: movie}));
                setOpenAlertError(true);
                return;
            }
        }
        dispatch(addMovie({payload: movie}));
        setOpenAlertValid(true);
      };
    
    const handleCloseAlert = () => {
        setOpenAlertValid(false);
        setOpenAlertError(false);
      };

    function truncate(str: string, n: number) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    } 

    useEffect (() => {
        async function fetchData() {
            const response = await axios.get(request.genre + movie.genre_ids[0]);
            get6SameMovies(response.data.results);
            return response;
            }
            fetchData();
        }, [movie.genre_ids]);

    const get6SameMovies = (results : Movie[]) => {
        var movies: Movie[] = [];
        for (let i = 0; i < results.length; i++) {
            if (i < 6) {
                movies.push(results[i]);
            }
        }
        setSameMovies(movies);
    }

    useEffect(() => {
        async function fetchData() {
        const response = await axios.get(`/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`)
        setDetailMovie(response.data);        
        return response;
        }
        fetchData();
    }, [movie.id]);

    return (
        <div>
            {type === "backdrop" ?
                movie.backdrop_path !==  null ? 
                <div key={movie.id} onClick={handleOpenModal} className="img-movie" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                    <span className="title_movie_tile">{movie.title}</span>
                </div> : null 
            :
                movie.poster_path !==  null ? 
                <div key={movie.id} onClick={handleOpenModal} className="img-movie-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
                </div> : null 
            }
            <Dialog open={open} onClose={handleCloseModalCard} className="modal" maxWidth="md"> 
                <div className="modal-card">
                    <div className="modal-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                        <div className="exit-button">
                            <button className="round" onClick={handleCloseModalCard}><CloseIcon /></button>
                        </div>
                        <div>
                            <h1 className="modal-title">{movie.title}</h1>  
                        </div>
                        <div className="div-button">
                            <button className="play_button"><PlayArrowIcon sx={{height:"20px" }}/>Lecture</button>
                            <button className="round" onClick={() => handleClickAlert(movie)}><AddIcon /></button>
                            <button className="round"><ThumbUpIcon /></button>
                            <button className="round"><ThumbDownIcon /></button>
                        </div>
                    </div>
                    <div className="description">   
                        <div className="overview">
                            <div className="left">
                                <p>{movie.release_date} | {detailMovie.runtime} Min</p>
                                <p>{truncate(movie.overview, 200)}</p>
                            </div>
                            <div className="right">
                                <p className="distribution"><span className="gray">Distribution: </span> 
                                {detailMovie.production_companies.map((company: any) => (
                                    <span key={company.id}>{company.name}, </span>
                                ))}
                                </p>
                                <p className="genre"><span className="gray">Genre: </span>
                                {detailMovie.genres.map((genre: any) => (
                                    <span key={genre.id}>{genre.name}, </span>
                                ))}
                                </p>
                            </div>
                        </div>
                        <div className="other_title_head">
                            <h3>Titre similaire</h3>
                            <div className="other_title">

                            {sameMovies.map((movie: any) => (
                                            movie.backdrop_path !==  null ? 
                                            <div className="other_tile">
                                                <SameTile movie={movie} />
                                            </div>
                                                : null
                                            
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <div className="alert">
                <Snackbar open={openAlertValid} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                        {movie.title} ajouté à la liste !
                    </Alert>
                </Snackbar>
                <Snackbar open={openAlertError} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                        {movie.title} supprimé de la liste !
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}