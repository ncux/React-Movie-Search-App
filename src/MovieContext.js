import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIE_API;
const queryUrl = `https://api.themoviedb.org/3/search/movie?query=marvel&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

export const Context = createContext();

export const Provider = props => {

    const [movies, setMovies] = useState([
        { title: '', description: '', poster: '', id: '' }
    ]);

    // useEffect( () => {
    //     async function fetchMovies() {
    //         let response = await axios.get(queryUrl);
    //         console.log(response.data.results);
    //         setMovies(response.data.results);
    //     }
    //     fetchMovies();
    // }, []);


    return (
        <Context.Provider value={ [movies, setMovies] }>
            { props.children }
        </Context.Provider>
    )
};




