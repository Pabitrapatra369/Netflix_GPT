
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcoming = () => {
     const dispatch=useDispatch();
  const getUpcomingMovies=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',API_OPTIONS)
    const json=await data?.json();
    
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    getUpcomingMovies()
  })
  return (
    <div></div>
  )
}

export default useUpcoming