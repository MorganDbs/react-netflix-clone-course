/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Navbar from '../Composants/Navbar';
import MovieTile from '../Composants/MovieTile';
import { useSelector } from 'react-redux';
import '../Styles/sMyList.css';

export default function MyList(){
    const listUser = useSelector((state: any) => state.user.list);
    const connectedUser = useSelector((state: any) => state.user.connectedUser);
    var watchList = [];

    for(let i = 0; i < listUser.length; i++){
        if(listUser[i].id === connectedUser.id){
            watchList = listUser[i].watchList;
        }
    }
    return (

    <div>
        <div>
            <Navbar />
        </div>
        <div className="body_myList">
            <div>
                <h2>Ma liste</h2>
            </div>
            <div className="list">
                {watchList.map((movie: any) => (
                    <MovieTile movie={movie.payload} type="backdrop"/>
                ))}
            </div>
        </div>
    </div>
    );
} 