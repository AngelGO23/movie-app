import React, { useEffect } from 'react'
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getDetails  } from '../../features/movies/movieSlice';


const MovieDetails = () => {

  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const {data} = useSelector(getDetails)
  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [imdbID])
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails;