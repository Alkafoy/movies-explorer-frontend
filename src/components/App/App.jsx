import React from "react";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import mainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";


function App() {
    const navigate = useNavigate()
    // Состояние логина
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // Состояние отправки / не отправки данных
    const [isSending, setIsSending] = useState(false)
    // Состояние контекста
    const [currentUser, setCurrentUser] = useState({});
    // Массив сохранённых фильмов
    const [savedMovies, setSavedMovies] = useState([])
    // Состояние ошибки при регистрации, авторизации
    const [isError, setIsError] = useState(false)
    // Состояние токена валидный / не валидный
    const [isCheckToken, setIsCheckToken] = useState(true)
    // Состояние редактирования данных пользователя. Разблокирует инпуты
    const [isEdit, setIsEdit] = useState(false)

    const token = localStorage.getItem('token');

    useEffect(() => {
        mainApi.getUserData(token)
            .then((userInfo) => {
                setCurrentUser(userInfo);
            })
            .catch((error) => {
                console.error("Ошибка при получении информации о пользователе: ", error);
            });

    }, []);

    useEffect(() => {
        checkToken()
    }, [])

    function handleUpdateUser(dataUser) {
        setIsSending(true);
        mainApi.editUserData(dataUser, token)
            .then(r => {
                setCurrentUser(r);
                setIsSending(false);
            })
            .catch(err => {
                console.error(`Ошибка при изменении данных пользователя ${err}`);
                setIsSending(false);
            })
    }

    function checkToken() {
        if (token) {
            auth.validateToken(token)
                .then(r => {
                    if (r) {
                        setIsLoggedIn(true);
                        navigate('/', {replace: true});
                    } else {
                        localStorage.removeItem('token');
                        setIsLoggedIn(false);
                    }
                })
                .catch(err => {
                    console.error(`Ошибка при проверке токена ${err}`);
                })
        } else {
            setIsLoggedIn(false);
        }
    }

    function handleRegister(name, email, password) {
        setIsSending(true);
        auth.registerUser({name, email, password})
            .then(r => {
                console.log('Успешная регистрация');
                console.log(r);
                setIsLoggedIn(true);
                setIsSending(false);
            })
            .catch(err => {
                console.error(`Произошла ошибка при регистрации ${err}`);
                setIsSending(false);
            })
    }

    function handleLogin(email, password) {
        setIsSending(true);
        auth.loginUser({email, password})
            .then(r => {
                if (r.token) {
                    const {token} = r;
                    localStorage.setItem('token', token);
                    setIsLoggedIn(true);
                    navigate('/');
                } else {
                    // В этом блоке обрабатываем случай, когда авторизация не удалась
                    console.error('Сервер не вернул токен');
                }
            })
            .catch(err => {
                console.log(`Возникла ошибка при авторизации, ${err}`);
                setIsSending(false);
            })
    }

    function handleLogout() {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/sign-in');
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    // Защищённые роуты
                    <Route path="/movies"
                           element={<ProtectedRoute
                               element={<Movies/>}
                               isLoggedIn={isLoggedIn}
                           />}/>
                    <Route path="/saved-movies"
                           element={<ProtectedRoute
                               element={<SavedMovies/>}
                               isLoggedIn={isLoggedIn}
                           />}/>
                    <Route path="/profile"
                           element={
                               <ProtectedRoute
                                   component={<Profile/>}
                                   isLoggedIn={isLoggedIn}
                                   logOut={handleLogout}
                                   editUserData={handleUpdateUser}
                                   setIsError={setIsError}
                                   setIsEdit={setIsEdit}
                                   isEdit={isEdit}
                               />}/>
                    // Остальные роуты
                    <Route path="/signup" element={<Register
                        onRegister={handleRegister}
                        isSending={isSending}
                    />}/>
                    <Route path="/signin" element={<Login
                        onLogin={handleLogin}
                        isSending={isSending}
                    />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
