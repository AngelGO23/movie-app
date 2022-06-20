import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";



function App() {
  return (
    <div className="app">
     <Router>
     <Header></Header>
     <div className='container'>
        <Routes>
            
            <Route path="/"  exact element= {<Home/>} />
            <Route path="/movie/:imdbID" exact element={<MovieDetails/>}/>
            <Route element={PageNotFound}/>
            
        </Routes>
      </div>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
