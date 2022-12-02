class MoviesApi {
  constructor(apiSettings) {
    this._baseUrl = apiSettings.baseUrl;
    this._header = apiSettings.headers;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._header
    })
      .then((res) => this._getResponse(res));
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;