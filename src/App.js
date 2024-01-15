import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './movieCard';
// import movieCard from './movieCard.jsx';
// import { setServers } from "dns";

//b5b5102c

const API_URL = "http://www.omdbapi.com?apikey=b5b5102c";
const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();

    console.log(data.Search);
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieSearch</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="search" onClick={() =>searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
       </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
      }
    </div>
  );
};

export default App;
