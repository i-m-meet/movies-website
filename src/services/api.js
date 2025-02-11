const api_key = import.meta.env.VITE_MOVIE_API_KEY;
const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': api_key,
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

export const getPopularMovies = async () => {
    const respone = await fetch(url, options)
    const data = await respone.json()
    console.log(data)
    return data.results
    
};

export const searchMovies = async (query) => {
    const response = await fetch(`${url}/search/keyword/${encodeURIComponent(query)}`)
    const data = await response.JSON()
    // console.log(data)
    return data.results
}
