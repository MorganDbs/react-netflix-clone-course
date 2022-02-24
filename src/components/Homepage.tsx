/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Homepage: FC = () => {

    
    const  signIn = () => {   
        window.location.href='/watchers'
    }

    return (
        <div>
            
      <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />

            <div id='navbar'>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" className={css`height: 40px; padding: 30px;`}/>
                    {/* <img src="https://image.tmdb.org/t/p/original/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg" alt="" /> */}
                </div>
                <div id='lienNav'>
                    
                   <Link to="/homepage" className='lien active'>Accueil </Link>
                   <Link to="/" className='lien'>Login </Link>
                   <Link to="/watchers" className='lien'>Watchers </Link>
                </div>
                     
            </div>
           

                    <p className={css`color:white`}> Accueil - Séries - Films - Nouveautés les plus regardées - Ma liste </p>
    
</div>
      
    
    
    )
}


export default Homepage