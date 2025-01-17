import React from 'react';

const movieCard = {
    maxWidth: '540px'
};


export const Movie = ({ title, description, poster }) => {

    return (
        <div className="">

            <div id="movieCard">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={ poster } width="100" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ title }</h5>
                            <p className="card-text">{ description }</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

