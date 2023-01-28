import React, { useState } from "react";
import { IMAGE_URL, ENDPOINT_TO_TITLE } from "../constants/url";
import MovieDetails from "./MovieDetails";

const Movie = ({ genre, films }) => {
  const [showDetails, setShowDetails] = useState(0);

  const handleShowDetails = (details) => {
    if (details === showDetails) setShowDetails(0);
    else setShowDetails(details);
  };

  return (
    <div className="py-8">
      <p className="text-white pb-4 font-bold">{ENDPOINT_TO_TITLE[genre]}</p>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {films.map(
            (film) =>
              film.backdrop_path && (
                <img
                  key={film.id}
                  className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={IMAGE_URL + film.backdrop_path}
                  alt={film.id}
                  onClick={() => handleShowDetails(film.id)}
                />
              )
          )}
        </div>
      </div>
      {showDetails !== 0 && (
        <MovieDetails
          film={films.filter((film) => film.id === showDetails)[0]}
          filmId={showDetails}
        />
      )}
    </div>
  );
};

export default Movie;
