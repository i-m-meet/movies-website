const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("clicked");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img src={movie.img || "https://via.placeholder.com/300x450"} alt={movie.title} className="w-full h-60 object-cover" />
        <div className="absolute top-2 right-2">
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300"
            onClick={onFavoriteClick}
          >
            ❤️
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">{movie.title}</h3>
        <p className="text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
