import React from 'react'
import  '../assets/css/Banner.css';
import {useState,useEffect} from "react";



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

      fetch(`http://localhost:5000/banner/${index}`)
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
        
        <header className = "banner"
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
       









        </>
    )
}

export default Banner
