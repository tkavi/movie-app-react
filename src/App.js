import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'; 
import MovieList from './components/MovieList';
const axios = require('axios')

function App() {
  const [movie,setMovies]=useState([]);
  useEffect=()=>{
    axios.get('https://kavita-movies-app.herokuapp.com/movies').then((response)=>{
    console.log(response.data)
    setMovies(response.data.movie)
    })
  }
  return (
    <div>
      <h2>Hii</h2>
      <MovieList movie={movie} />
    </div>
  );
}

export default App;
