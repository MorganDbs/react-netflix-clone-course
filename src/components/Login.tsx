/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import Watchers from './Watchers';

const Login: FC = () => {

    const  signIn = () => {
        console.log('redirection');
    }

    return (
           
    <div id="container" className={css`color:white;`}>
        <h1> Sign In </h1>
        <input type="text" placeholder='Email or phone number'  className={css`width: 100%`}/>
        <input type="text" placeholder='Password'/>
        <input type="submit" id='submit' value='Sign in'  onClick={signIn}/>
            
        
    </div>
    
    
    )
}


export default Login