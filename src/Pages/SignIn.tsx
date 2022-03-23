/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../Styles/sSignIn.css';
import { FormControl, FormGroup, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

export default function SignIn(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState('');
    const[errorPassword, setErrorPassword] = React.useState('');
    const navigate = useNavigate()

    const getEmail = (e: {target: {value: string};}) => {
        setEmail(e.target.value);
        setErrorEmail( "" );
    };

    const getPassword = (e: {target: {value: string};}) => {
        setPassword(e.target.value);
        setErrorPassword( "" );
    };

    const setSignInUser = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email  || regex.test(email) === false){
            setErrorEmail( "Email invalide" );
        }
        else if(!password){
            setErrorPassword( "Mot de passe invalide" );
        }
        else {
            localStorage.setItem('UserEmail', email);
            localStorage.setItem('Password', password);
            navigate("/wiw");
        }
    }

    return (

    <div className="all">
        <div className="header">
            <NavLink to="/">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix logo" />
            </NavLink>
        </div>
        <div className="form_sign">
            <div className="inner_form">
                    <FormControl fullWidth>
                        <div className="sign_user">
                            <div className="center">
                                <h1 className="title_add">Se connecter</h1>
                                <TextField 
                                    autoFocus
                                    id="textField"
                                    label="Email ou pseudo"
                                    color="error"
                                    variant="filled"
                                    size="small"
                                    fullWidth
                                    sx={{ mt: 1 }}
                                    onChange={getEmail}
                                />
                                <span className='error_tag'>{ errorEmail }</span>
                                <TextField 
                                    id="textField"
                                    label="Mot de passe"
                                    color="error"
                                    variant="filled"
                                    size="small"
                                    sx={{ mt: 2}}
                                    fullWidth
                                    onChange={getPassword}
                                />
                                <span className='error_tag'>{ errorPassword }</span>
                                <button className="signin_button" onClick={() => {setSignInUser()}}>Connexion</button>
                                <div className="remember"> 
                                    <div className="remember_tile">
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox sx={{ color: 'lightgray' }}/>} label="Se souvenir de moi" />
                                        </FormGroup>
                                    </div>                           
                                    <div className="need_help">
                                        Besoin d'aide ?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FormControl>
            </div>
        </div>
    </div>
    );
} 