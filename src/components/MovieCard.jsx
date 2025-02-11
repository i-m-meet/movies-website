const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("clicked");
  };

  const imageUrl = movie.primaryImage || "https://via.placeholder.com/300x450";
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img src={imageUrl}  alt={movie.primaryTitle} className="w-full h-60 object-cover" />
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
        <h3 className="text-lg font-bold text-gray-900">{movie.primaryTitle}</h3>
        <p className="text-gray-600">{movie.releaseDate?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
