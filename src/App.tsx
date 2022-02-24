/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from './components/Login';
import Watchers from './components/Watchers';
import Homepage from './components/Homepage';

const App: FC = () => {

    return (
           
    <div className={css`height: 100%; min-height:100%; `}> 
        <Router>

            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/watchers" element={<Watchers />} />
                <Route path="/homepage" element={<Homepage />} />
            </Routes>
            
        </Router>

    </div>
    )
}


export default App
