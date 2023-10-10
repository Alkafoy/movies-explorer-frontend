import React from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import {Route, Routes} from "react-router-dom";
// import {useEffect, useState} from "react";
// import api from "../utils/api.js";
// import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
    // const [currentUser, setCurrentUser] = useState({});

    return (
        // <CurrentUserContext.Provider value={currentUser}>
        <div className='app'>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/saved-movies" element={<SavedMovies/>}/>

                <Route path="/signup" element={<Register/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>

        </div>
        // </CurrentUserContext.Provider>
    );
}

export default App;
