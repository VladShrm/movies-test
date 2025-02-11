"use client"

import React, {useEffect, useState} from "react";
import {moviesService} from "@/services/movies.api.service";
import Link from "next/link";
import PosterPreview from "@/components/PosterPreviewComponent";
import {Movie} from "@/models/models";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import {useSearch} from "@/context/searchContext";

const MoviesPage = () => {
    const {searchQuery} = useSearch();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                let data;
                if (searchQuery) {
                    data = await moviesService.getSearchedMovies(searchQuery, currentPage);
                } else {
                    data = await moviesService.getMovies(currentPage);
                }
                setMovies(data?.results || []);
                setTotalPages(Math.min(data?.total_pages || 1, 500));
            } catch (error) {
                setError("Error loading movies");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [searchQuery, currentPage]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress/>
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    return (
        <div className="p-4">
            <div className="flex justify-center mb-8">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    siblingCount={1}
                    boundaryCount={1}
                />
            </div>

            <h1 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-500 hover:text-blue-600">
                Available Movies
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies?.map((movie) => (
                    <div
                        key={movie?.id}
                        className="flex flex-col items-center justify-evenly w-full h-[65vh] rounded-lg mb-[4vh] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200"
                    >
                        <Link
                            href={`/movies/${movie.id}?movie=${encodeURIComponent(
                                JSON.stringify(movie)
                            )}`}
                            className="flex flex-col items-center justify-evenly w-full h-full text-black no-underline"
                        >
                            <PosterPreview
                                posterPath={movie?.poster_path}
                                movieTitle={movie?.title}
                            />
                            <h3 className="text-lg font-bold transition-colors duration-300 hover:text-coral">
                                {movie?.title}
                            </h3>
                            <div className="flex items-center">
                                <p className="text-sm">
                                    {movie?.release_date}, IMDb: <b>{movie?.vote_average.toFixed(1)}</b>
                                </p>
                                <img
                                    src="/icons8-star-96.png"
                                    alt="star"
                                    className="h-[2vh] ml-1"
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    siblingCount={1}
                    boundaryCount={1}
                />
            </div>
        </div>
    );
};

export default MoviesPage;
