import { useContext, useState } from "react";
import { useMovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  const imageUrl = movie.primaryImage || "https://via.placeholder.com/300x450";
  return (
    <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={imageUrl}
          alt={movie.primaryTitle}
          className="h-60 w-full object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2">
          <button
            className="rounded-full bg-gray-900 p-2 shadow-md transition duration-300 hover:bg-gray-700 hover:text-white"
            onClick={onFavoriteClick}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">
          {movie.primaryTitle}
        </h3>
        <p className="text-gray-600">{movie.releaseDate?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
