import React from 'react'
import Card from './Card';
import "../assets/css/MoviesSection.css"
import { Link } from 'react-router-dom';
import {useEffect,useContext} from "react";
import videoContext from "../context/Videocontext";

const MoviesPage = () => {
    const {movies,setMovies} = useContext(videoContext);

  useEffect(()=>{

      fetch("/api/movies")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
       
            setMovies(json);
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
     
     

  },[])
    return (
        <section id="movie-list">

        <div className= "container">

            <h1>Movies </h1>

            <div className="movie-table">

            {movies.map((movie)=>( <Link to={`movies/${movie.id}`}>
                                        <Card key={movie.id} id={movie.id}  name={movie.title} imgs={movie.image}  />
                                    </Link>))}

            </div>

        </div>
    </section>
    )
}

export default MoviesPage
