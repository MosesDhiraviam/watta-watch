
/*
git repo link - https://github.com/MosesDhiraviam/digital-video-store-app/tree/master
hroku link - https://digital-video-store-app.herokuapp.com/
*/






import React from 'react'
import NavBar from "./Navbar"
import Banner from "./Banner"
import {useState,useEffect} from "react";
import FeaturedFlims from "./FeaturedFlims"
import FeaturedTvShows from "./FeaturedTvShows"
import Content from "./Content"
import Footer from "./Footer"
import LoginPage from "./Login"
import SignupPage from "./Signup"
import MoviesPage from "./MoviesPage"
import TvShowsPage from "./TvShowsPage"
import MovieDetailsPage from "./MovieDetailsPage"
import ShowsDetailsPage from "./ShowsDetailsPage"
import ContentImage from "../assets/images/content-image.jpeg"
import ContentImage2 from "../assets/images/content-image2.jpeg"
import "../assets/css/App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import videoContext from "../context/Videocontext";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(()=>{

      //Async operation //POST,PUT OR DELETE
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
    <>
    <div className="main-container">
    <Router>
      <Switch>

      <videoContext.Provider value={{movies,shows,offers,setMovies,setShows,setOffers}} > 
      <Route exact path="/">
      <NavBar/>
      <Banner/>
      <FeaturedFlims/>
      <img src={ContentImage2} className="content-image"/>
      <FeaturedTvShows/>
      <img src={ContentImage} className="content-image"/>
      <Content/>
      <Footer/>
          </Route>
          <Route path="/loginPage">
            <NavBar/>
            <LoginPage/>
            <Footer />
          </Route>
          
          <Route path="/registerPage">
            <NavBar/>
            <SignupPage/>
            <Footer />
          </Route>
          <Route path="/moviesPage">
            <NavBar/>
            <MoviesPage/>
            <Footer />
          </Route>
          <Route path="/tvShowsPage">
            <NavBar/>
            <TvShowsPage/>
            <Footer />
          </Route>
          <Route exact path="/movies/:id">
              <NavBar/>
              <MovieDetailsPage/>
              <Footer/>
            </Route>
            <Route exact path="/shows/:id">
              <NavBar/>
              <ShowsDetailsPage/>
              <Footer/>
            </Route>
            </videoContext.Provider>
      </Switch>
      </Router>
    </div>
    </>
  )
}

export default App
