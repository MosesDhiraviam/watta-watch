import React from 'react'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import { Row, Col, Rate, Tag } from 'antd'
import "../assets/css/DetailsPage.css"

const ShowsDetailsPage = () => {

    const [shows, setShows] = useState({
          id: 0,
          title: "",
          description: "",
          type: "",
          year: null,
          featured: false,
          banner: null,
          image: "",
          rating: 0,
          totalRatings: 0,
          rentPrice: "",
          buyPrice: ""
    })

    
    const {id} = useParams();

    useEffect(()=>{
    fetch(`http://localhost:5000/shows/${id}`)
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
        <Row>
        <Col span={8} offset={1} style={{
                backgroundSize: "cover",
                backgroundImage: `url(${shows.banner})`,
                backgroundPosition: "center center"
            }}>
          <div className="detailed-contents">
          <div className = "banner__buttons">
          <img className="movie-image" alt={shows.title} width='85%' src={shows.image} />
                    <button className = "banner__button">Buy for ${shows.buyPrice}</button>
                    <button className = "banner__button">Rent for ${shows.rentPrice}</button>
                </div>
          <h1>{shows.title}</h1>
          <strong> Description: </strong>
          <p>{shows.description}</p>
          <div className='type'>
            <span className='typeTitle'>
              <strong>Type: </strong>
            </span>
            <p>{shows.type}</p>
            <p>Year Made:   {shows.year}</p>
            <p>Ratings:  {shows.rating}</p>
            <p>Total Ratings: {shows.totalRatings}</p>
            </div>
          </div>
          
        </Col>
        
         
       
       
      </Row>
    )
}

export default ShowsDetailsPage
