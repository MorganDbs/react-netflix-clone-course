/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector } from 'react-redux';
import UserTile from '../Composants/UserTile';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../Styles/sWiW.css';
import { NavLink } from "react-router-dom";

export default function WhoIsWatching(){
    const userList = useSelector((state: any) => state.user.list);

    return (

    <div className="all">
        <div className="header">
            <NavLink to="/wiw">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix logo" />
            </NavLink>
        </div>
        <div className="all-user">
            <h1>Who's watching ?</h1>
            <div className="body-myList">
                {userList.map((user: any) => (
                    <UserTile user={user}/>
                ))}
                <div className="user-tile">
                    <div>
                        <NavLink to="/newprofile" className="link">
                            <AddCircleIcon id="icon-profile" />
                        </NavLink>
                    </div>
                    <div className="user-name">
                        <h4>Ajouter un profil</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="manage_button_div">
            <NavLink to="/manageselection">
                <button className="manage_button">Gérer les profils</button>
            </NavLink>
        </div>
    </div>
    );
} 