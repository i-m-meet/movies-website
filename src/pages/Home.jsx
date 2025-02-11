import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "3 idiots", release_date: "2014" },
    { id: 2, title: "Pathaan", release_date: "2023" },
    { id: 3, title: "John Wick", release_date: "2021" },
    { id: 4, title: "Star wars", release_date: "2024" },
    { id: 5, title: "Avataar", release_date: "2008" },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => {
          return (
            (
              <MovieCard key={movie.id} movie={movie} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Home;
