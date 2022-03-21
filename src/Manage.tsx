/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, deleteUser } from './features/user/userSlice';
import './Styles/sManage.css';
import { FormControl, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

export default function Manage(){
    const manageUser = useSelector((state: any) => state.user.managedUser);
    const [newUserName, setNewUserName] = React.useState(manageUser.name);
    const [newProfilePicture, setNewProfilePicture] = React.useState(manageUser.picture);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getNewUserName = (e: {target: {value: string};}) => {
        setNewUserName(e.target.value);
    };

    const getNewProfilePicture = (e: {target: {value: string};}) => {
        setNewProfilePicture(e.target.value);
    };

    const setUpdateUser = () => {
        const newUser = {
            id: manageUser.id,
            name: newUserName,
            email: manageUser.email,
            password: manageUser.password,
            picture: newProfilePicture,
            isLogged: false,
            watchList: manageUser.watchList,
        }
        dispatch(updateUser(newUser));
    }

    const setDeleteUser = () => {
        dispatch(deleteUser(manageUser));
        navigate("/");
    }

    return (

    <div className="all">
        <div className="header">
            <NavLink to="/">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix logo" />
            </NavLink>
        </div>
        <div className="form">
            <div className="inner_form">
                <h1 className="title_add">Modifier un profil</h1>
                <p className="paraph_add">Modifier votre nom et votre photo de profile Netflix</p>
                <div className="body_form">
                    <FormControl fullWidth>
                        <div className="newUserName">
                            <img src={newProfilePicture} alt="profile" />
                            <div>
                                <TextField 
                                    autoFocus
                                    value={newUserName}
                                    id="textField"
                                    label="Nom"
                                    color="error"
                                    variant="filled"
                                    size="small"
                                    sx={{ m: 1 }}
                                    fullWidth
                                    onChange={getNewUserName}
                                />
                                <TextField 
                                    autoFocus
                                    value={newProfilePicture}
                                    id="textField"
                                    label="URL de la photo"
                                    color="error"
                                    variant="filled"
                                    size="small"
                                    sx={{ m: 1 }}
                                    fullWidth
                                    onChange={getNewProfilePicture}
                                />
                                <button className="delete_button" onClick={() => {setDeleteUser()}}>Suppression</button>
                            </div>
                        </div>
                        <div className="buttons">
                            <NavLink to="/" onClick={() => {setUpdateUser()}}>
                                <button className="confirm_button">Confirmer</button>
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