/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css } from '@emotion/css';
import addProfil from '../assets/images/addProfil.png'

const Watchers: FC = () => {

    return (
           
    <div id="containerWatchers" className={css`color:white;`}>
        <h1> Who's watching ? </h1>
        
        <div id="watchers">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw2Q6J1xM3k3xAbRpWhsI2KmzdgF_X4uU3lF_kBXqI6BLWrU0kOu0f1uNkanAH2E_iE8&usqp=CAU" alt="" />
                <p> Nom </p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgY5Bs3qw-jB1PFP6D3bX4rMDlTqg91Log3-fq9aprDPnPp_DHwv5NvIgCLghZcey-Zo&usqp=CAU" alt="" />
                <p> Nom </p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqOmIVYBoPoiR5kWV8LsjRzd0FiKP-HqAZpsFAS-bYVMQiHwKBXbjXYWNMQiQzRT7Phc&usqp=CAU" alt="" />
                <p> Nom </p>
            </div>
            <div>
                <img src={addProfil}  alt="" />
                <p> Nom </p>
            </div>
        </div>


        <button id="btnManage"> Manage profiles </button>
            
        
    </div>
    
    
    )
}


export default Watchers