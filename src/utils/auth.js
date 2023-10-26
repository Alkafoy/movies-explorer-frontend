class Auth {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _responseHandler(res) {
        if (res.ok) return res.json()
        else return Promise.reject(`ошибка ${res.status}`);
    }

    registerUser(data) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
        })
            .then(this._responseHandler)
    }

    loginUser(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(this._responseHandler)
    }

    validateToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(this._responseHandler)
    }
}

const auth = new Auth({
    baseUrl: 'https://api.movies.esergey.nomoredomainsrocks.ru',
    headers: {'Content-Type': 'application/json'}
})

export default auth;