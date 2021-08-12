import React from 'react'
import Card from './Card';
import "../assets/css/MoviesSection.css"
import { Link } from 'react-router-dom';
import {useEffect,useContext} from "react";
import videoContext from "../context/Videocontext";

const TvShowsPage = () => {
    const {shows,setShows} = useContext(videoContext);

    useEffect(()=>{
  
        fetch("https://watta-watch-api.herokuapp.com/shows/series")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
         
              setShows(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
       
       
  
    },[])
    return (
        <section id="movie-list">

        <div className= "container">

            <h1>Tv Shows </h1>

            <div className="movie-table">

            {shows.map((show)=>( <Link to={`shows/${show.id}`}>
                                        <Card key={show.id} id={show.id}  name={show.title} imgs={show.poster}  />
                                    </Link>))}

            </div>

        </div>
    </section>
    )
}

export default TvShowsPage
