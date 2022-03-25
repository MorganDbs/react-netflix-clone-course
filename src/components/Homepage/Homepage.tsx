/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import Row from '../Row';
import requests from '../../requests';
import Navbar from '../Navbar';
import Banner from './Banner';


const Homepage: FC = () => {

    const signIn = () => {   
        window.location.href='/watchers'
    }

    return (
        <div className='homepage'>
            
            <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />

            <Navbar />

            <Banner isSerie={false}/>
                            
             <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} isSerie={false}/>
             <Row title="Tendance actuelle" fetchUrl={requests.fetchTrending} isLarge={false}  isSerie={false}/>
             <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} isLarge={false} isSerie={false}/>
             <Row title="Series" fetchUrl={requests.fetchSeries} isLarge={false} isSerie={true}/>
             <Row title="Actions" fetchUrl={requests.fetchActionMovies} isLarge={false} isSerie={false}/>
             <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} isLarge={false} isSerie={false}/>
             <Row title="Horreurs" fetchUrl={requests.fetchHorrorMovies} isLarge={false} isSerie={false}/>
             <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} isLarge={false} isSerie={false}/>
             <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} isLarge={false} isSerie={false}/>

        </div>
      
    
    
    )
}


export default Homepage