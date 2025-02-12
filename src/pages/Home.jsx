import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return 
    setLoading(true)
    try{
      const searchResult = await searchMovies(searchQuery)
      setMovies(searchResult)
      setError(null)

    }catch(err){
      console.log(err)
      setError(" sorry no movie found")
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-2/3 rounded-l-md border-2 border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none sm:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
        >
          Search
        </button>
      </form>
      {error && <div className="text-red-500 text-center font-semibold">{error}</div>}

      {/* Movies Grid */}
      {loading ? (
        <div className="text-center text-xl font-semibold text-gray-700">Loading......</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
