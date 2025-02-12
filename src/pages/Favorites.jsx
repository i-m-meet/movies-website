import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) { // Fixed condition check to prevent unnecessary rendering
    return (
      <div className="p-6"> {/* Added padding for better spacing */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Favorite Movies</h2> {/* Styled header */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-gray-800">No Favorite Movies Yet</h2>
      <p className="mt-2 text-gray-600">Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
};

export default Favorites;
