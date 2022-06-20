import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/apis/movieAPI";
import {APIKey} from "../../common/apis/movieAPIKey"


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async ()=>{
        const movieText = "Harry";
        const response = await movieAPI.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
            )
        return response.data;
    })
const initialState = {
    movies:{},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        addMovies:(state, {payload})=>{
            state.movies = payload;
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
    }
    
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;