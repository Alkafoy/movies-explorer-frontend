class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _responseHandler(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`ошибка: ${res.status}`);
        }
    }

    getUserData(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                return this._responseHandler(res);
            })
    }

    editUserData(data, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._responseHandler)
    }

    addMovie(data, token) {
        return fetch(
            `${this._baseUrl}/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: data.title,
                    link: data.link
                })
            })
            .then(this._responseHandler)
    }

    addLike(cardId, token) {
        return fetch(
            `${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(this._responseHandler)
    }
}
const mainApi = new MainApi({ baseUrl: 'https://api.movies.esergey.nomoredomainsrocks.ru' });

export default mainApi;
