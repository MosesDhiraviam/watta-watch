import React from 'react'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import { Row, Col, Rate, Tag } from 'antd'
import "../assets/css/DetailsPage.css"

const MovieDetailsPage = () => {

    const [movies, setMovies] = useState({
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
    fetch(`http://localhost:5000/movies/${id}`)
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
        <Row>
        <Col span={8} offset={1} style={{
                backgroundSize: "cover",
                backgroundImage: `url(${movies.banner})`,
                backgroundPosition: "center center"
            }}>
          <div className="detailed-contents">
          <div className = "banner__buttons">
          <img className="movie-image" alt={movies.title} width='85%' src={movies.image} />
                    <button className = "banner__button">Buy for ${movies.buyPrice}</button>
                    <button className = "banner__button">Rent for ${movies.rentPrice}</button>
                </div>
          <h1>{movies.title}</h1>
          <strong> Description: </strong>
          <p>{movies.description}</p>
          <div className='type'>
            <span className='typeTitle'>
              <strong>Type: </strong>
            </span>
            <p>{movies.type}</p>
            <p>Year Made:   {movies.year}</p>
            <p>Ratings:  {movies.rating}</p>
            <p>Total Ratings: {movies.totalRatings}</p>
            </div>
          </div>
        </Col>
        
         
          
       
      </Row>
    )
}

export default MovieDetailsPage
