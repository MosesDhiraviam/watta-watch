
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
import UsersPage from "../components/UsersPage"
import Shows from "./Shows"
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
  const [loggedinUsers, setLoggedinUsers] = useState({
    firstName:"",
    lastName:"",
    email:""
});

  
  return (
    <>
    <div className="main-container">
    <Router>
      <Switch>

      <videoContext.Provider value={{movies,shows,loggedinUsers,setMovies,setShows,setLoggedinUsers}} > 
      <Route exact path="/">
      <NavBar/>
      <Banner/>
      <FeaturedFlims/>
      <img src={ContentImage2} className="content-image"/>
      <FeaturedTvShows/>
      <img src={ContentImage} className="content-image"/>
      
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
            <Route exact path="/users">
              <NavBar/>
              <UsersPage/>
              <Footer/>
            </Route>
            <Route exact path="/showsPage">
              <NavBar/>
              <Shows/>
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
