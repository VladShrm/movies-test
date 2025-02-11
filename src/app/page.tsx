export default function Home() {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 min-h-screen text-white font-sans">
            <header className="flex justify-center items-center py-10 bg-blue-800 shadow-lg">
                <h1 className="text-5xl font-bold tracking-tight text-yellow-300 uppercase">
                    Movie-Explorer
                </h1>
            </header>

            <section
                className="container mx-auto px-6 py-16 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg shadow-2xl">
                <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-8">
                    Project Overview
                </h2>
                <div className="bg-white text-gray-900 p-10 rounded-lg shadow-xl">
                    <p className="text-lg leading-relaxed mb-4">
                        "MovieExplorer" is a modern platform that lets users browse through a collection of movies
                        and get detailed
                        information about each film. It's perfect for those looking to discover new movies or learn
                        more about their
                        favorite films.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Built with cutting-edge technologies, MovieExplorer provides quick access to movie ratings,
                        descriptions,
                        trailers, and much more, ensuring a smooth experience for every user.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-12">Technologies Used</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="bg-white text-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Next.js</h3>
                        <p className="text-lg">
                            A powerful React framework for building fast and scalable web applications with
                            server-side rendering and static site generation.
                        </p>
                    </div>
                    <div
                        className="bg-white text-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">TypeScript</h3>
                        <p className="text-lg">
                            A statically typed superset of JavaScript that enhances the development experience with
                            type safety, helping to prevent runtime errors.
                        </p>
                    </div>
                    <div
                        className="bg-white text-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Tailwind CSS</h3>
                        <p className="text-lg">
                            A utility-first CSS framework that enables rapid design and development of responsive,
                            clean, and modern UIs without writing much custom CSS.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16 bg-gray-800 text-white">
                <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-12">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Browse Movies</h3>
                        <p className="text-lg">
                            Discover a wide variety of movies, with detailed descriptions, ratings, and trailers to
                            help you find your next favorite film.
                        </p>
                    </div>
                    <div
                        className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Detailed Movie Information</h3>
                        <p className="text-lg">
                            Get detailed info on each movie, including cast, genre, release date, and more, to make
                            informed decisions before watching.
                        </p>
                    </div>
                    <div
                        className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Search & Filter</h3>
                        <p className="text-lg">
                            Use advanced search and filtering options to find movies based on various criteria such
                            as genre, rating, and release year.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-800 text-center text-white py-6 mt-16">
                <p>&copy; 2025 MovieExplorer. All rights reserved.</p>
            </footer>
        </div>
    );
}
