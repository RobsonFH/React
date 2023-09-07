import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client"; //inserir i react no html

const favoriteMovies = {
    name: ['Senhor dos Aneis', 'Harry Potter', 'Arcane'],
    description: ['Fantasia/Ação', 'Fantasia/Aventura', 'Fantasia/games'],
    photos: [
        'senhor.jpg',
        'hp.jpg',
        'arcane.jpg'
      ]
    };
  

  const movieListJSX = (
    <div>
      <h1>Meus Filmes Favoritos</h1>
      <ul>
        {favoriteMovies.name.map((movieName, index) => (
          <li key={index}>
            <h2>{movieName}</h2>
            <p>{favoriteMovies.description[index]}</p>
            <img src={favoriteMovies.photos[index]} alt={movieName} />
          </li>
        ))}
      </ul>
    </div>
  );
  

  
  const container = document.getElementById('myApp');

  const root = createRoot(container);

  root.render(movieListJSX);