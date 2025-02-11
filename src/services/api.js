const api_key = import.meta.env.VITE_MOVIE_API_KEY;
const url = 'https://imdb236.p.rapidapi.com/imdb';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': api_key,
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

export const getPopularMovies = async () => {
    const respone = await fetch(`${url}/top250-movies`, options)
    const data = await respone.json()
    console.log(data)
    return data
    
};

export const searchMovies = async (query) => {
    const response = await fetch(`${url}/search/keyword/${encodeURIComponent(query)}`)
    const data = await response.JSON()
    // console.log(data)
    return data.results
}
