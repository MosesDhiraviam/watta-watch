import React from 'react';
import Card from './Card';
import "../assets/css/cardholder.css"
import Carousel from "react-elastic-carousel";
import {useState,useEffect} from "react";

const breakPoints = [
    { width: 1, itemsToShow: 1 , pagination: false},
    { width: 0, itemsToShow: 2, itemsToScroll: 2 , pagination: false},
    { width: 0, itemsToShow: 3 , pagination: false},
    { width: 0, itemsToShow: 5 , pagination: false}
  ];

const FeaturedFlims = () => {

    const [movies, setMovies] = useState([]);

  useEffect(()=>{

      fetch("/api/movies")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
        const newMovie= json.filter((jsn)=>{return jsn.featured===true})
            setMovies(newMovie);
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
                {movies.map((movie)=>(<Card key={movie.id} id={movie.id}  name={movie.title} imgs={movie.image}  />))}


</Carousel>
                </div>
                </>
    )
}

export default FeaturedFlims
