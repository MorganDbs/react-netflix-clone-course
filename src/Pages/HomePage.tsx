/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Navbar from '../Composants/Navbar';
import Row from '../Composants/Row';
import request from '../Requests/Request';
import Banner from '../Composants/Banner';
import TenPopular from '../Composants/TenPopular';

export default function HomePage(){
    return (

    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <Banner fetchUrl={request.mostPopular}/>
        </div>
        <div>
            <Row title={"Les plus gros succès sur Netflix"} fetchUrl={request.mostPopular}/>
            <TenPopular title={"Top 10 actuellement"} fetchUrl={request.topRated}/>
            <Row title={"Tendances actuelles"} fetchUrl={request.trending}/>
            <Row title={"Series saluées par les critique"} fetchUrl={request.topRatedSeries}/>
            <Row title={"Films romantique"} fetchUrl={request.romantic}/>
            <Row title={"Science Fiction"} fetchUrl={request.scienceFiction}/>
        </div>
    </div>
    );
} 