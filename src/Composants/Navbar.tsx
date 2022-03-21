/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../Styles/sNavbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const userList = useSelector((state: any) => state.user.list);
  const connectedUser = useSelector((state: any) => state.user.connectedUser);

    return (
        <div className="navbar">
            <NavLink to="/home" className="nav_logo">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix logo" />
            </NavLink>

            <div className="nav_links">
                <NavLink to="/home" style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      fontWeight: "bold",
                    }
                  : {}
              } className="link">Accueil</NavLink>
                <NavLink to="/serie" style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      fontWeight: "bold",
                    }
                  : {}
              } className="link">Série</NavLink>
                <NavLink to="/film" style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      fontWeight: "bold",
                    }
                  : {}
              } className="link">Film</NavLink>
                <NavLink to="/nouveautes" style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      fontWeight: "bold",
                    }
                  : {}
              } className="link">Nouveautés les plus regardées</NavLink>
                <NavLink to="/liste" style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      fontWeight: "bold",
                    }
                  : {}
              } className="link">Ma liste</NavLink>
            </div>

            <div className="nav_search">
                <SearchIcon className="icon link" />
                <a href="/direct" className="link">DIRECT</a>
                <a href="/jeunesse" className="link">Jeunesse</a>
                <NotificationsIcon className="icon link"/>
            </div>
            <NavLink to="/" className="nav_logo">
              <img className="profile_picture icon"
                src={`${connectedUser.picture}`}
                alt="Profile logo" />
            </NavLink>
        </div>
    );
} 