/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, deleteUser } from '../features/user/userSlice';
import '../Styles/sManage.css';
import { FormControl, TextField, Select, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const pictures = [
    {name:'Black Miror', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFEHx5mAAQUNHxAsuV6Yy65b9Zm6xhMgfuytCCGJoUmcbmVAOGMI1s3Bomk0rTD4A7cM4WmoF9s0gzYVLGf6_E9zEpQ.png'},
    {name:'Casa De Papel', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png'},
    {name:'Squid Game', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM65BrEcA69FfK3v0XwQ3Rr61x9fXX1u6K5k9Ql_5cX2F2jZEx8cL7cYb_N40Yc-x2gsd3I59EZFnOaAc61CrwzCMQ.png'},
    {name:'Defaut', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png'},
    {name:'The Witcher', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFJSe2el5rVnCVz5d1R8pnqYzBiXwEM7ooxTNY1LCrf6HzWO0RCORDzTO9IlOqpmCYCKIVyjPX5xMFw-RLz9WpqYvEg.png'},
    {name:'Rouge', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFMAEDzrjFngWzmfzjBwDCp5aArul_aesBXbpYZgdo9FSha3M71rrn_IpfzTfPwpJIAN_zMpj9UOfJXwvOnvDL3OFCA.png'},
    {name:'Jaune', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBn2zjQtllskB3t8dY2fDDcErehJKNM-wmubGjHlBZJ3J5CxjCC7RZXS6HLUR-OzWk4iyEifj0bkxn9qBdaY4mWFVQ.png'},
    {name:'Bleu', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBobc7fp6yrDz9-co-ad-tw1yCqfgUHJITWSdWNVuuBgUnpVEkHJ0LUBBw2OsASRcQCbMfNZsLUDA2B5NJ336B_TIw.png'},
    {name:'Gris', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFAx0vpY-2wMoKq6NB86jynopBLEWBi4jkOR6n3A1-bSFo7edA95Qkn5-LVZad5km8LWJ_xqMz67rHxY1SVKXxf17Ng.png'},
  ]

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
        navigate("/wiw");
    }

    return (

    <div className="all">
        <div className="header">
            <NavLink to="/wiw">
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
                            <div className="form_manage">
                                <TextField 
                                    autoFocus
                                    value={newUserName}
                                    id="textField"
                                    label="Nom"
                                    color="error"
                                    variant="filled"
                                    size="small"
                                    sx={{ mt: 1 }}
                                    fullWidth
                                    onChange={getNewUserName}
                                />
                                <Select
                                    labelId="select-filter-name"
                                    id="textField"
                                    label="Choisir une photo"
                                    value={newProfilePicture}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    onChange={getNewProfilePicture}
                                >
                                    {pictures.map(picture => <MenuItem value={picture.url}>{picture.name}</MenuItem>)}
                                </Select>
                                <button className="delete_button" onClick={() => {setDeleteUser()}}>Suppression</button>
                            </div>
                        </div>
                        <div className="buttons">
                            <NavLink to="/wiw" onClick={() => {setUpdateUser()}}>
                                <button className="confirm_button">Confirmer</button>
                            </NavLink>
                            <NavLink to="/wiw">
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