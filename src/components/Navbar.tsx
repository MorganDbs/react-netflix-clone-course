/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Navbar: FC = () => {

    return(
        <div id='navbar'>
            <div>
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" className={css`height: 30px; padding: 30px;`}/>
                {/* <img src="https://image.tmdb.org/t/p/original/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg" alt="" /> */}
            </div>
            <div id='lienNav'> 
                {/* <Link to="/homepage" className='lien active'>Home </Link> */}
                <Link to="/homepage" className='lien'>Home </Link>
                <Link to="/movies" className='lien'>Movies </Link>
                <Link to="/series" className='lien'> Series </Link>
                <Link to="/wishlist" className='lien'> Wish List Movies</Link>
            </div>  
        </div>
    )
}


export default Navbar