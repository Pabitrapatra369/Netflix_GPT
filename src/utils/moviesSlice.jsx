import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})
export const {addNowPlayingMovies}=moviesSlice.actions;
export const {addTrailerVideo}=moviesSlice.actions;
export const {addPopularMovies}=moviesSlice.actions;
export const {addTopRatedMovies}=moviesSlice.actions;
export const {addUpcomingMovies}=moviesSlice.actions;

export default moviesSlice.reducer
