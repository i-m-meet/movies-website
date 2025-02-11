import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "3 Idiots", release_date: "2014" },
    { id: 2, title: "Pathaan", release_date: "2023" },
    { id: 3, title: "John Wick", release_date: "2021" },
    { id: 4, title: "Star Wars", release_date: "2024" },
    { id: 5, title: "Avatar", release_date: "2008" },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for movies..."
          className="border-2 border-gray-300 rounded-l-md px-4 py-2 w-2/3 sm:w-1/2 focus:outline-none focus:border-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
          Search
        </button>
      </form>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
