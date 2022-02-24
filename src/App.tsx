/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import Login from './components/Login';
import Watchers from './components/Watchers';

const App: FC = () => {

    return (
           
    <div className={css`height: 100%; min-height:100%; `}> 

        <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />

        <div>
            
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" className={css`height: 40px; padding: 30px;`}/>
        {/* <img src="https://image.tmdb.org/t/p/original/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg" alt="" /> */}
        </div>
        
        <Login />
        
            

    </div>
    )
}


export default App
