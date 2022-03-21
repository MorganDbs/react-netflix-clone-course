/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/user/userSlice';
import './Styles/sAddProfile.css';
import { FormControl, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AddProfile(){
    const [newUserName, setNewUserName] = React.useState('');
    const dispatch = useDispatch()
    const userList = useSelector((state: any) => state.user.list);

    const getNewUserName = (e: {target: {value: string};}) => {
        setNewUserName(e.target.value);
    };

    const addNewUser = () => {
        const newUser = {
            id: userList.length + 1,
            name: newUserName,
            email: '',
            password: '',
            picture: 'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png',
            isLogged: false,
            watchList: [],
        }
        dispatch(addUser(newUser));
    }


    return (

    <div className="all">
        <div className="header">
            <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix logo" />
        </div>
        <div className="form">
            <div className="inner_form">
                <h1 className="title_add">Ajouter un profil</h1>
                <p className="paraph_add">Ajoutez un profil pour un nouvel utilisateur Netflix</p>
                <div className="body_form">
                    <FormControl fullWidth>
                        <div className="newUserName">
                            <TextField 
                                autoFocus
                                id="textField"
                                label="Nom"
                                color="error"
                                variant="filled"
                                size="small"
                                sx={{ m: 1 }}
                                fullWidth
                                onChange={getNewUserName}
                            />
                        </div>
                        <div className="buttons">
                            <NavLink to="/" onClick={addNewUser}>
                                <button className="confirm_button">Ajouter</button>
                            </NavLink>
                            <NavLink to="/">
                                <button className="cancel_button">Annuler</button>
                            </NavLink>
                        </div>
                    </FormControl>
                </div>
            </div>
        </div>
    </div>
    );
} 