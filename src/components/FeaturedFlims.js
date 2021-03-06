import React from 'react';
import Card from './Card';
import "../assets/css/cardholder.css"
import Carousel from "react-elastic-carousel";
import {useEffect,useContext} from "react";
import videoContext from "../context/Videocontext";

const breakPoints = [
    { width: 1, itemsToShow: 1 , pagination: false},
    { width: 0, itemsToShow: 2, itemsToScroll: 2 , pagination: false},
    { width: 0, itemsToShow: 3 , pagination: false},
    { width: 0, itemsToShow: 5 , pagination: false}
  ];

const FeaturedFlims = () => {

  const {movies,setMovies} = useContext(videoContext);

  useEffect(()=>{

    fetch("https://watta-watch-api.herokuapp.com/shows/featured?type=movies")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
        setMovies(json)
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
     
     

  },[])
  
    return (
        <>
            <div>
                <h3 className="pop_nf_h3">Featured Flims</h3>
            </div>
                
                <div className="pop_main">
                <Carousel  breakPoints={breakPoints} pagination="false" >
                {movies.map((movie)=>(<Card key={movie.id} id={movie.id}  name={movie.title} imgs={movie.poster}  />))}


</Carousel>
                </div>
                </>
    )
}

export default FeaturedFlims
