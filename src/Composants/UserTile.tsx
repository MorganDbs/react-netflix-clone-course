/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../Styles/sUserTile.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserConnected } from '../features/user/userSlice';
import { NavLink } from "react-router-dom";

export default function UserTile(props : {user: any}){    
    const { user } = props;
    const userList = useSelector((state: any) => state.user.list);
    const dispatch = useDispatch()

    const chooseUser = (user: any) => {
        for(let i = 0; i < userList.length; i++){
            if(userList[i].id === user.id){
                dispatch(changeUserConnected(user));
            }
        }
    }

    return (

    <div className="user-tile">
        <div className="user-profile">
            <NavLink to="/home" className="nav_logo" onClick={() => {chooseUser(user)}}>
                <img src={`${user.picture}`}  
                    alt="user" 
                    className="img-profile" 
                />
            </NavLink>
        </div>
        <div className="user-name">
            <h4>{`${user.name}`}</h4>
        </div>
    </div>
    );
} 