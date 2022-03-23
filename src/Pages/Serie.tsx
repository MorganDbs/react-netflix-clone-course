/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Navbar from '../Composants/Navbar';
import Row from '../Composants/Row';
import request from '../Requests/Request';
import Banner from '../Composants/Banner';

export default function Serie(){
    return (

    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <Banner fetchUrl={request.bannerSeries}/>
        </div>
        <div>
            <Row title={"Les plus gros succès sur Netflix"} fetchUrl={request.mostPopularSeries}/>
            <Row title={"Series saluées par les critique"} fetchUrl={request.topRatedSeries}/>
            <Row title={"Films romantique"} fetchUrl={request.romanticSeries}/>
            <Row title={"Anime"} fetchUrl={request.animeSeries}/>
        </div>
    </div>
    );
} 