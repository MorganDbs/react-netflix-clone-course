/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../Styles/sSameTile.css';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, deleteMovie } from '../features/user/userSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SameTile(props: { movie: any}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { movie } = props;
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

    return (
        <div className="sametile">
            <div key={movie.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}} className="samemovieimg"> 
                <div className="samemovietitle">
                    {movie.title}
                </div>
            </div>
            <div className="samemoviedate">
                <span>{movie.release_date}</span>
                <button className="round" onClick={() => handleClickAlert(movie)}><AddIcon /></button>
            </div>
            <div className="sametileoverview">
                <p>{truncate(movie.overview, 140)}</p>
            </div>
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