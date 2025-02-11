"use client"

import React, {ChangeEvent} from 'react';
import Link from 'next/link';
import {useSearch} from "@/context/searchContext";


const MenuComponent: React.FC = () => {
    const {searchQuery, setSearchQuery} = useSearch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex justify-between items-center px-6 py-3 bg-gray-800 w-full">
            <div className="flex justify-start space-x-6 flex-grow">
                <Link href="/" className="text-white hover:text-blue-500 transition duration-300 no-underline">
                    Home
                </Link>
                <Link href="/movies" className="text-white hover:text-blue-500 transition duration-300 no-underline">
                    Movies
                </Link>
            </div>

            <div className="flex justify-center items-center flex-grow">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for a movie..."
                    className="border-b border-gray-300 border-r-8 px-4 py-2 rounded-md text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default MenuComponent;
