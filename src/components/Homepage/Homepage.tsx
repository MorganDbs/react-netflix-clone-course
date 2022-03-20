/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import { css, cx } from '@emotion/css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Row from '../Row';
import requests from '../../requests';
import Navbar from '../Navbar';
import Banner from './Banner';

const Homepage: FC = () => {

    
    const signIn = () => {   
        window.location.href='/watchers'
    }

    return (
        <div>
            
      <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />

            <Navbar />

            <Banner />

                            
             <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>
             <Row title="Tendance actuelle" fetchUrl={requests.fetchTrending} isLarge={false}/>
             <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} isLarge={false}/>
             <Row title="Actions" fetchUrl={requests.fetchActionMovies} isLarge={false}/>
             <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} isLarge={false}/>
             <Row title="Horreurs" fetchUrl={requests.fetchHorrorMovies} isLarge={false}/>
             <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} isLarge={false}/>
             <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} isLarge={false}/>
             <Row title="Series" fetchUrl={requests.fetchSeries} isLarge={false}/>
</div>
      
    
    
    )
}


export default Homepage