/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from './components/Connexion/Login';
import Watchers from './components/Connexion/Watchers';
import Homepage from './components/Homepage/Homepage';
import Series from './components/Series/Series';
import Movies from './components/Movies/Movies';
import WishList from './components/WishList/WishList';

const App: FC = () => {

    return (
           
    <div className={css`height: 100%; min-height:100%; `}> 
        <Router>

            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/watchers" element={<Watchers />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/series" element={<Series />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/wishlist" element={<WishList />} />
            </Routes>
            
        </Router>

    </div>
    )
}


export default App
