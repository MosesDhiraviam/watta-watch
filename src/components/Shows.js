import React from 'react'
import Card from './Card';
import "../assets/css/MoviesSection.css"
import { Link } from 'react-router-dom';
import {useEffect,useContext} from "react";
import videoContext from "../context/Videocontext";
import SearchBox from "./SearchBox"

const Shows = () => {
    const {movies,setMovies} = useContext(videoContext);

  useEffect(()=>{

      fetch("https://watta-watch-api.herokuapp.com/shows/")
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

  const filterMovies = (input)=>{

    fetch(`https://watta-watch-api.herokuapp.com/shows/search?q=${input}`)
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
       
            setMovies(json);
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
}

    return (
        <section id="movie-list">

        <div className= "container">

          <SearchBox onFilter={filterMovies}/>

            <h1>Movies and Series </h1>

            <div className="movie-table">

            {movies.map((movie)=>( <Link to={`movies/${movie.id}`}>
                                        <Card key={movie.id} id={movie.id}  name={movie.title} imgs={movie.poster}  />
                                    </Link>))}

            </div>

        </div>
    </section>
    )
}

export default Shows
