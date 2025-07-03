import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

// Type Movie as defined in interfaces/
// interface Movie {
//     id: number;
//     title: string;
//     adult: boolean;
//     backdrop_path: string;
//     genre_ids: number[];
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     release_date: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
//   }

const MovieCard = ({id, 
                    poster_path, 
                    title, 
                    vote_average, 
                    release_date}:Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image
                source={{
                    uri: poster_path
                        ? `https://image.TMDB.org/t/p/w500${poster_path}`
                        : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
                }}
                className="w-full h-52 rounded-lg"
                resizeMode='cover'
            />

            <Text className="text-sm font-bold text-white mt-2">{title}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard