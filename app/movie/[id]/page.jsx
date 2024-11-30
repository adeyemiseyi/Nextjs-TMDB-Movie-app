import React from 'react';
import Image from 'next/image';

export default async function MoviePage({ params }) {
    const { id } = params;

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
        );

        if (!res.ok) {
            throw new Error('Failed to fetch movie data');
        }

        const movie = await res.json();

        return (
            <div className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                        width={500}
                        height={300}
                        className="rounded-lg"
                        style={{maxWidth: '100%', height: '100%'}}
                        alt={movie.title || movie.name}
                    />
                    <div className="p-2">
                        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                        <p className="text-lg mb-3">{movie.overview}</p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Date Released:</span>
                            {movie.release_date || movie.first_air_date}
                        </p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Rating:</span>
                            {movie.vote_count}
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch {
        return <div>Failed to load movie data. Please try again later.</div>;
    }
}












/*import React from 'react'
import Image from 'next/image'

export default async function MoviePage({ params }) {
    // Directly destructure 'id' from params
    const { id } = params;

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
        );

        // Handle if the fetch fails
        if (!res.ok) {
            throw new Error('Failed to fetch movie data');
        }

        const movie = await res.json();

        return (
            <div className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                        width={500}
                        height={300}
                        className="rounded-lg"
                        style={{maxWidth: '100%', height:'100%'}}
                        alt={movie.title || movie.name} // Added alt text for accessibility
                    />
                    <div className="p-2">
                        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                        <p className="text-lg mb-3">{movie.overview}</p>
                        
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Date Released:</span>
                            {movie.release_date || movie.first_air_date}</p>
                        <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                            {movie.vote_count}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return <div>Failed to load movie data. Please try again later.</div>; // Error handling
    }
}









/*import React from 'react'
import Image from 'next/image'

export default async function MoviePage({ params }) {
    const {movieId} = params.id;

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
        );

        // Handle if the fetch fails
        if (!res.ok) {
            throw new Error('Failed to fetch movie data');
        }

        const movie = await res.json();

        return (
            <div className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                        width={500}
                        height={300}
                        className="rounded-lg"
                        alt={movie.title || movie.name} // Added alt text for accessibility
                    />
                    <div className="p-2">
                        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                        <p className="text-lg mb-3">{movie.overview}</p>
                        <p>{movie.release_date || movie.first_air_date}</p>
                        <p>{movie.vote_count}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return <div>Failed to load movie data. Please try again later.</div>; // Error handling
    }
}

*/








