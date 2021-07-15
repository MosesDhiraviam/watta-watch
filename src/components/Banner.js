import React from 'react'
//import  '../assets/css/Banner.css';
import {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap';



const Banner = () => {

    const [index, setIndex] = useState(4);
    const [banner, setBanner]= useState([]);

    

      

  useEffect(()=>{

    const interval = setInterval(() => {
        setIndex(index => index + 1);
      }, 4000);

    //   if(index>movies.length){
    //     return () => clearInterval(interval);
    //   }

      fetch(`/api/banner/${index}`)
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
        setBanner(json);
       
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })

},[])
      


       
      

  
  
  
    return (
        <>
        
        {/* <header className = "banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${banner.banner})`,
                backgroundPosition: "center center"
            }}
        ><div className = "banner__contents">
                <h1 className = "banner__title">
                    {banner.title}
                   
                    
                </h1>               
                    <h1 className = "banner__description">{banner.description}</h1>
            </div>
            
            <div className = "banner__fadeBottom" ></div>
        </header>
        */}


<Carousel>
    <Carousel.Item interval={1000}>
        <img className = "d-block w-100" src="https://image.tmdb.org/t/p/w300//nVKRspU9SQEs2gNrms8cDKsI4vx.jpg" width = "540" height = "460"
        alt="car-1"/>
        <Carousel.Caption><h4>The Tomorrow War</h4></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
        <img className = "d-block w-100" src="https://image.tmdb.org/t/p/w300//tyZmdMdI3jLs93HDObOZkdq4J7z.jpg" width = "540" height = "460"
        alt="car-1"/>
        <Carousel.Caption><h4>Fear Street Part One: 1994</h4></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
        <img className = "d-block w-100" src="https://image.tmdb.org/t/p/w300//z2UtGA1WggESspi6KOXeo66lvLx.jpg" width = "540" height = "460"
        alt="car-1"/>
        <Carousel.Caption><h4>A Quiet Place Part II</h4></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
        <img className = "d-block w-100" src="https://image.tmdb.org/t/p/w300//ok7RdHhVngnwkvKj09tvtOvypG.jpg" width = "540" height = "460"
        alt="car-1"/>
        <Carousel.Caption><h4>No Sudden Move</h4></Carousel.Caption>
    </Carousel.Item>
</Carousel>






        </>
    )
}

export default Banner
