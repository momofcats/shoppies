// function searchMovie(searchQuerry) {
// return fetch(`http://www.omdbapi.com/?s=${searchQuerry}&Search&page=10&apikey=507284`)
// .then(response => response.json())
// .then(data => console.log(data[Search]));
// }

// export default searchMovie;

class MoviesApi {
    constructor(options) {
        this.options = options;
    }

    searchMovies(title) {
        return fetch(
            `${this.options.baseUrl}?s=${title}&apikey=507284`,
            {
                method: "GET",
            }
        ).then(async (res) => {
            if(res.ok) {
                return res.json();
            }
            const body = await res.json();
            return Promise.reject(body.error); 
        });
    }
}

const omdbApi = new MoviesApi({
    baseUrl: "http://www.omdbapi.com/",
});

export default omdbApi;