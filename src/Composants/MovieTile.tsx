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

export default function MovieTile(props: { movie: any}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { movie } = props;
    const [open, setOpen] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
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
            setMovies(response.data.results);
            return response;
            }
            fetchData();
        }, []);

    return (
        <div>
            {movie.backdrop_path !==  null ? 
                <div key={movie.id} onClick={handleOpenModal}>
                    <img className="img-movie"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                        alt={movie.title} 
                    />
                </div> : null
            }
            <Dialog open={open} onClose={handleCloseModalCard} className="modal"> 
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
                            <button className="round" onClick={handleCloseModalCard}><ThumbUpIcon /></button>
                            <button className="round" onClick={handleCloseModalCard}><ThumbDownIcon /></button>
                        </div>
                    </div>
                    <div className="description">   
                        <div className="overview">
                            <p>{movie.release_date}</p>
                            <p>{truncate(movie.overview, 200)}</p>
                        </div>
                        <div className="other-title-head">
                            <h3>Titre similaire</h3>
                            <div className="other-title">
                            {movies.map((movie: any) => (
                                            movie.backdrop_path !==  null ? 
                                                    <img key={movie.id} onClick={handleOpenModal} className="img-movie-other"
                                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                                                        alt={movie.title} 
                                                    />
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