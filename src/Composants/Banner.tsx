/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect }from 'react';
import axios from '../Requests/Axios';
import '../Styles/sBanner.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Dialog from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, deleteMovie } from '../features/user/userSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Banner(props: {fetchUrl: string}) {
    const { fetchUrl } = props;
    const [movie, setMovie]: any = React.useState([]);
    const [open, setOpen] = React.useState(false);
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

    useEffect (() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);

            return response;
            }
            fetchData();
        }, [fetchUrl]);

        function truncate(str: string, n: number) {
            return str?.length > n ? str.substr(0, n - 1) + '...' : str;
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
        
    return ( 
        
        <header className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h1 className="description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="buttons">
                    <button className="play_button"><PlayArrowIcon sx={{height:"20px" }}/>Lecture</button>
                    <button className="info_button" onClick={handleOpenModal}><InfoIcon />Plus d'infos</button>
                </div>
                <div className="age_sound">
                        <button className="sound_button"><VolumeUpIcon sx={{height:"20px" }}/></button>
                        <p className="age">{movie?.adult ? true : "+18"}</p>
                    </div>
            </div>
            <div className="banner--fadeBottom"></div>
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
                        <div>
                            <h3>Titre similaire</h3>
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
                        {movie.title} supprimé dans la liste !
                    </Alert>
                </Snackbar>
            </div>
        </header>
    )
}