import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from '../../axios';
import requests from '../../requests';


type Props = {
    setModalOpen : React.Dispatch<React.SetStateAction<boolean>>,
    movieId:any
};


const ModalContent: React.FC<Props> = ({setModalOpen,movieId}) => {
    // const [movie, setMovie] = useState<any>([]); 

    // useEffect(() => {
    //     async function fetchData(){
    //         const request = await axios.get(requests.fetchNetflixOriginals);
    //         setMovie(request.data.results[
    //             Math.floor(Math.random() * request.data.results.length)
    //         ])
    //         console.log(Math.floor(Math.random() * request.data.results.length));
    //         return request;
    //     }
    //     fetchData();       
    // }, [])

    console.log('Movie : ')
    console.log(movieId)

    return (
    <div className="modal_content">
        <div>
             <div className="div_btnClose">
                <button type="button" className="btn_modalContent" onClick={()=>setModalOpen(false)}> X </button>
            </div>
            <header className='banner'
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieId?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className='banner_title'> {movieId?.title || movieId?.name || movieId?.original_name} </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Lire</button>
                    <button className="banner_button">Ma liste</button>
                </div>
                <h3 className="banner_description">
                    {movieId?.overview}
                </h3>
            </div>   
            <div className="banner_fadeBottom"/>
        </header>
        </div>
       
          
            <p> This is cool </p>
    </div>
    )
}

export default ModalContent;