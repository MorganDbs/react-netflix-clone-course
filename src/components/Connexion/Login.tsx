/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'

const Login: FC = () => {

    
    const  signIn = () => {   
        window.location.href='/watchers'
    }

    return (
        <div>
            
      <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />
            <div>
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" className={css`height: 40px; padding: 30px;`}/>
                {/* <img src="https://image.tmdb.org/t/p/original/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg" alt="" /> */}
            </div>
           
    <div id="container" className={css`color:white;`}> 
        <h1> Sign In </h1>
        <input type="text" placeholder='Email or phone number'  className={css`width: 100%`}/>
        <input type="text" placeholder='Password'/>
        <input type="submit" id='submit' value='Sign in'  onClick={signIn}/>
                     
        
    </div>
</div>
      
    
    
    )
}


export default Login