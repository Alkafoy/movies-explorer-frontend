import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Main/Profile/Profile";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import InfoTooltipUpdate from "../infoTooltipUpdate/infoTooltipUpdate";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import * as api from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] =
    useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
  
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .getMovies()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  function handleRegister({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
        handleAuthorize({ email, password });
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleAuthorize({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoToolTipPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);

          navigate("/movies", { replace: true });

          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .setUserInfo(newUserInfo)
      .then((data) => {
        setInfoToolTipUpdatePopupOpen(true);
        setIsUpdate(true);

        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoToolTipUpdatePopupOpen(true);
        setIsUpdate(false);

        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardLike(card) {
    api
      .postCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoToolTipUpdatePopupOpen(false);
  }

  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  const isOpen = isInfoToolTipPopupOpen || isInfoToolTipUpdatePopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                    onAuthorization={handleAuthorize}
                    isLoading={isLoading}
                  />
                )
              }
            />

            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register onRegister={handleRegister} isLoading={isLoading} />
                )
              }
            />

            <Route path={"*"} element={<NotFound />} />

            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={Movies}
                  handleLikeFilm={handleCardLike}
                />
              }
            />

            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={SavedMovies}
                />
              }
            />

            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  signOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                />
              }
            />
          </Routes>

          <InfoTooltip
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
          />

          <InfoTooltipUpdate
            isOpen={isInfoToolTipUpdatePopupOpen}
            onClose={closeAllPopups}
            isUpdate={isUpdate}
            onCloseOverlay={closeByOverlay}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
