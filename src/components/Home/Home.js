import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import movieAPI from "../../common/apis/movieAPI";
import {APIKey} from "../../common/apis/movieAPIKey"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  
  const fetchMovies = async () =>{
    const response = await movieAPI.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err) =>{
      console.log("err", err);
    });
    dispatch(addMovies(response.data));
  }
  
  useEffect(()=>{

    fetchMovies();

  },[])
  return (
    <div>
    <div className='banner-img'></div>
    <MovieListing/>
    </div>
  )
}

export default Home;