import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/apis/movieAPI";
import {APIKey} from "../../common/apis/movieAPIKey"


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term)=>{
        
        const response = await movieAPI.get(
            `?apiKey=${APIKey}&s=${term}&type=movie`
            )
        return response.data;
});


export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term)=>{
        
        const response = await movieAPI.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
            )
        return response.data;
});



export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id)=>{
        
        const response = await movieAPI.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
            )
        return response.data;
})




const initialState = {
    movies:{},
    shows: {},
    selectedMovieOrShow: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        
        removeSelectedMovieOrShow: (state)=>{
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Succesfull fetch")
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Succesfull fetch shows")
            return {...state, shows: payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) =>{
            console.log("Succesfull fetch details")
            return {...state, selectedMovieOrShow: payload};
        },
    }
    
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;

export const getDetails = (state) => state.movies.selectedMovieOrShow;

;

export default movieSlice.reducer;