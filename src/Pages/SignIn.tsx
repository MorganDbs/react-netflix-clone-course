/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../Styles/sSignIn.css';
import { FormControl, FormGroup, TextField, FormControlLabel, Checkbox, InputAdornment, IconButton} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function SignIn(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState({password: "", showPassword: false,});
    const [errorEmail, setErrorEmail] = React.useState('');
    const[errorPassword, setErrorPassword] = React.useState('');
    const navigate = useNavigate()

    const getEmail = (e: {target: {value: string};}) => {
        setEmail(e.target.value);
        setErrorEmail( "" );
    };

    const handlePasswordChange = (prop: any) => (e: { target: { value: any; }; }) => {
        setPassword({ ...password, [prop]: e.target.value });
      };

    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
      };
      
      const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
      };
      

    const setSignInUser = () => {
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(!email  || regex.test(email) === false){
            setErrorEmail( "Email invalide" );
        }
        else if(!password){
            setErrorPassword( "Mot de passe invalide" );
        }
        else {
            localStorage.setItem('UserEmail', email);
            localStorage.setItem('Password', password.password);
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
                                    label="Email"
                                    variant="filled"
                                    color="error"
                                    size="small"
                                    fullWidth
                                    sx={{ mt: 1, color: 'white'}}
                                    onChange={getEmail}
                                />
                                <span className='error_tag'>{ errorEmail }</span>
                                <TextField 
                                    label="Mot de passe"
                                    variant="filled"
                                    color="error"
                                    size="small"
                                    type={password.showPassword ? "text" : "password"}
                                    sx={{ mt: 2, backgroundColor: 'rgb(73, 73, 73)', borderRadius: '2px', color: 'white'}}
                                    fullWidth
                                    onChange={handlePasswordChange}
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position='end'>
                                            <IconButton
                                              aria-label='toggle password visibility'
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}>
                                             {password.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        ),
                                      }}
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