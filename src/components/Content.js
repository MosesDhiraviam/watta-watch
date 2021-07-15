import React from 'react'
import  {Container}  from 'react-bootstrap';
import ContentDataComponent from "./contentData"
import "../assets/css/Content.css"
import {useEffect,useContext} from "react";
import videoContext from "../context/Videocontext";
import Carousel from "react-elastic-carousel";

const Content = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 , pagination: false},
        { width: 0, itemsToShow: 2, itemsToScroll: 2 , pagination: false},
        { width: 0, itemsToShow: 3 , pagination: false},
        { width: 0, itemsToShow: 5 , pagination: false}
      ];

      const {offers,setOffers} = useContext(videoContext);

    useEffect(()=>{
  
        fetch("http://localhost:5000/offers")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
          setOffers(json)
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
       
       
  
    },[])
    

    
    
    return (
        <section id="content">
            <div>
                <h3 className="pop_nf_h3">Content: Hot Offers</h3>
            </div>
        <Container>
        <Carousel  breakPoints={breakPoints} pagination="false" >
        {
                    offers.map(offer => <ContentDataComponent contentData={offer}></ContentDataComponent>)
                   
                }


</Carousel> 
        </Container>
    </section>
    )
    
    
    
}

export default Content
