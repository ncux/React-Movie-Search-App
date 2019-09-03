import React, { useContext } from 'react';
import { Movie } from './movie';
import { Context } from '../MovieContext';

export const Movies = () => {

    const [movies, setMovies] = useContext(Context);

    return (
        <div className="row">

                { movies.map(movie => (
                    <div className="card text-left col-sm-12 col-md-4 mb-3">
                        <Movie
                            key={ movie.id }
                            title={ movie.title }
                            description={ movie.overview }
                            poster={ `http://image.tmdb.org/t/p/w185/${movie.poster_path}` }
                        />
                    </div>
                )) }

        </div>
    );

};

