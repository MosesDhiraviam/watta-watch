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

const FeaturedTvShows = () => {
    const {shows,setShows} = useContext(videoContext);

    useEffect(()=>{
  
        fetch("/api/shows?featured=true")
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
          <>
              <div>
                  <h3 className="pop_nf_h3">Featured Tv Shows</h3>
              </div>
                  
                  <div className="pop_main">
                  <Carousel  breakPoints={breakPoints} pagination="false">
                  {shows.map((show)=>(<Card key={show.id} id={show.id}  name={show.title} imgs={show.image}  />))}
  
  
  </Carousel>
                  </div>
                  </>
      )
  }

export default FeaturedTvShows
