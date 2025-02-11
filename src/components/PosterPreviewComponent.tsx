import React from 'react';

const PosterPreview = ({posterPath, movieTitle}: { posterPath: string, movieTitle: string }) => {
    const posterBaseURL = `https://image.tmdb.org/t/p/w300${posterPath}`;

    return (
        <div className="m-0 p-0 w-[90%] flex items-center">
            <img src={posterBaseURL} alt={movieTitle} className="m-0 w-full"/>
        </div>
    );
};

export default PosterPreview;
