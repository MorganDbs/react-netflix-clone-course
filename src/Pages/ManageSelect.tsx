/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setManagedUser } from '../features/user/userSlice';
import '../Styles/sWiW.css';
import { NavLink } from "react-router-dom";

export default function ManageSelect(){
    const userList = useSelector((state: any) => state.user.list);
    const dispatch = useDispatch()

    const setManaged = (user: any) => {
        dispatch(setManagedUser(user));
    };
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
            <h1>Choisir le profil à modifier </h1>
            <div className="body-myList">
                {userList.map((user: any) => (
                    <div className="user-tile">
                        <div className="user-profile">
                            <NavLink to="/manage" onClick={() => {setManaged(user)}}>
                                <img src={`${user.picture}`}  
                                    alt="user" 
                                    className="img-profile" />
                            </NavLink>
                        </div>
                        <div className="user-name">
                            <h4>{`${user.name}`}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="manage_button_div">
            <NavLink to="/wiw">
                <button className="manage_button">Terminé</button>
            </NavLink>
        </div>
    </div>
    );
} 