/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../features/user/userSlice';
import '../Styles/sAddProfile.css';
import { FormControl, TextField, Select, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const pictures = [
    {name:'Defaut', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png'},
    {name:'Black Miror', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFEHx5mAAQUNHxAsuV6Yy65b9Zm6xhMgfuytCCGJoUmcbmVAOGMI1s3Bomk0rTD4A7cM4WmoF9s0gzYVLGf6_E9zEpQ.png'},
    {name:'Casa De Papel', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png'},
    {name:'Squid Game', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM65BrEcA69FfK3v0XwQ3Rr61x9fXX1u6K5k9Ql_5cX2F2jZEx8cL7cYb_N40Yc-x2gsd3I59EZFnOaAc61CrwzCMQ.png'},
    {name:'The Witcher', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFJSe2el5rVnCVz5d1R8pnqYzBiXwEM7ooxTNY1LCrf6HzWO0RCORDzTO9IlOqpmCYCKIVyjPX5xMFw-RLz9WpqYvEg.png'},
    {name:'Rouge', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFMAEDzrjFngWzmfzjBwDCp5aArul_aesBXbpYZgdo9FSha3M71rrn_IpfzTfPwpJIAN_zMpj9UOfJXwvOnvDL3OFCA.png'},
    {name:'Jaune', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBn2zjQtllskB3t8dY2fDDcErehJKNM-wmubGjHlBZJ3J5CxjCC7RZXS6HLUR-OzWk4iyEifj0bkxn9qBdaY4mWFVQ.png'},
    {name:'Bleu', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBobc7fp6yrDz9-co-ad-tw1yCqfgUHJITWSdWNVuuBgUnpVEkHJ0LUBBw2OsASRcQCbMfNZsLUDA2B5NJ336B_TIw.png'},
    {name:'Gris', url:'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFAx0vpY-2wMoKq6NB86jynopBLEWBi4jkOR6n3A1-bSFo7edA95Qkn5-LVZad5km8LWJ_xqMz67rHxY1SVKXxf17Ng.png'},
  ]

export default function AddProfile(){
    const [newUserName, setNewUserName] = React.useState('');
    const [profilePicture, setProfilePicture] = React.useState(pictures[0].url);
    const dispatch = useDispatch()
    const userList = useSelector((state: any) => state.user.list);

    const getNewUserName = (e: {target: {value: string};}) => {
        setNewUserName(e.target.value);
    };

    const getProfilePicture = (e: {target: {value: string};}) => {
        setProfilePicture(e.target.value);
    };

    const addNewUser = () => {
        const newUser = {
            id: userList.length + 1,
            name: newUserName,
            picture: profilePicture,
            isLogged: false,
            watchList: [],
        }
        dispatch(addUser(newUser));
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
            <div className="inn_form">
                <h1 className="title_add">Ajouter un profil</h1>
                <p className="paraph_add">Ajoutez un profil pour un nouvel utilisateur Netflix</p>
                <div className="body_form">
                    <FormControl fullWidth>
                        <div className="newUserName">
                            <img src={profilePicture} alt="profile" style={{ width: '120px' }}/>
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
                                    value={profilePicture}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    onChange={getProfilePicture}
                                >
                                    {pictures.map(picture => <MenuItem value={picture.url}>{picture.name}</MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        <div className="buttons">
                            <NavLink to="/wiw" onClick={addNewUser}>
                                <button className="confirm_button">Ajouter</button>
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