class ApiMovies {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _responseHandler(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`ошибка: ${res.status}`);
        }
    }


    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
            .then(this._responseHandler)
    }

    getMovies() {
        return this._request('/')
    }
}

const apiMovies = new ApiMovies({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default apiMovies