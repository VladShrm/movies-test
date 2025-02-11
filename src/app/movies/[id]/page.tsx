"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import StarsRating from "@/components/StarsRating";

const MovieInfo = () => {
    const searchParams = useSearchParams();
    const movieData = searchParams.get("movie");
    const movie = movieData ? JSON.parse(movieData) : null;

    const router = useRouter();

    const posterBaseURL = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;
    const backdropBaseURL = `https://image.tmdb.org/t/p/w300${movie?.backdrop_path}`;

    if (!movie) return <p>No movie found</p>;

    return (
        <div className="w-full h-auto p-6 flex flex-col items-center justify-evenly bg-gradient-to-tl from-[#1e3c72] to-[#2a5298] rounded-[15px] text-white">
            <button
                onClick={() => router.back()}
                className="absolute top-32 left-2 bg-transparent border-2 border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-all">
                ← Back
            </button>

            <div className="w-[85%] h-[auto] flex flex-col md:flex-row justify-evenly items-center bg-[#2a2a2a] rounded-xl shadow-2xl p-6 mt-10">
                <div className="w-full md:w-[35%] flex justify-center">
                    <img
                        src={posterBaseURL}
                        alt={movie?.title}
                        className="w-[250px] h-auto rounded-xl shadow-lg object-cover"
                    />
                </div>

                <div className="w-full md:w-[60%] text-left mt-4 md:mt-0">
                    <h3 className="text-3xl font-bold text-[#FFD700]">{movie?.title}</h3>
                    <div className="flex items-center text-yellow-400 mt-2">
                        <StarsRating rating={+movie?.vote_average.toFixed(1)}/>
                        <span className="ml-2 text-lg">{movie?.vote_average.toFixed(1)}</span>
                    </div>
                    <p className="mt-2"><b>Release date: </b>{movie?.release_date}</p>
                    <p><b>Age: </b>{movie?.adult ? "18+" : "any"}</p>
                    <p><b>Language: </b>{movie?.original_language.toUpperCase()}</p>
                </div>
            </div>

            <div className="w-[85%] mt-10 max-w-4xl flex flex-col items-center bg-[#3b3b3b] rounded-xl shadow-lg p-6">
                <p className="text-lg text-gray-300">{movie?.overview}</p>

                <div className="flex justify-center w-full mt-6">
                    <img
                        src={backdropBaseURL}
                        alt={movie?.title + '_backdrop'}
                        className="max-w-full max-h-[50vh] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
