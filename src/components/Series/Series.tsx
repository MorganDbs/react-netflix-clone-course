/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { FC } from 'react';
import Row from '../Row';
import requests from '../../requests';
import Navbar from '../Navbar';
import Banner from '../Homepage/Banner';


const Series: FC = () => {


    return (
        <div className='homepage'>
            
            <input type="hidden" defaultValue={process.env.REACT_APP_API_KEY} />

            <Navbar />

            <Banner isSerie={true} />
                            
             <Row title="Populaires" fetchUrl={requests.fetchSeriesPop} isLarge={true} isSerie={true}/>
             <Row title="Actions et aventures" fetchUrl={requests.fetchSeriesAction} isLarge={false}  isSerie={true}/>
             <Row title="Sciences fictions" fetchUrl={requests.fetchSeriesScienceFictions} isLarge={false}  isSerie={true}/>
             <Row title="Comédies" fetchUrl={requests.fetchSeriesComedy} isLarge={false}  isSerie={true}/>
             <Row title="Romances" fetchUrl={requests.fetchSeriesRomance} isLarge={false}  isSerie={true}/>
             <Row title="Dramas" fetchUrl={requests.fetchSeriesDrama} isLarge={false}  isSerie={true}/>
             <Row title="Documentaires" fetchUrl={requests.fetchSeriesDocumentaries} isLarge={false}  isSerie={true}/>
             <Row title="Mystères" fetchUrl={requests.fetchSeriesMystery} isLarge={false}  isSerie={true}/>
             
        </div>
      
    )
}


export default Series