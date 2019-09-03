import React, { useState, useContext } from 'react';
import { Context } from '../MovieContext';
import axios from 'axios';
import styles from './search.module.css';

const API_KEY = process.env.REACT_APP_MOVIE_API;
const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

export const Search = () => {

    const [movies, setMovies] = useContext(Context);
    const [title, setTitle] = useState('');

    const onTitleChange = e => setTitle(e.target.value);

    const onFormSubmit = async e => {
        e.preventDefault();
        let response = await axios.get(`${queryUrl}${title}`);
        console.log(response.data.results);
        setMovies(response.data.results);
        setTitle('');
    };

    return (
        <div className="mt-3">
            <form onSubmit={ onFormSubmit }>
                <div className="form-group">
                    <input onChange={ onTitleChange } className="form-control" name={ title } value={ title } placeholder="Enter a movie title" />
                    <input type="submit" className="btn btn-success" value="Search" />
                </div>
            </form>
        </div>
    );

};

