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
      <div className="relative flex items-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div
          id="slider"
          className="grid grid-cols-3 gap-y-4 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-9 lg:gap-x-8"
        >
          {films.map((film) => (
            <div
              key={film.id}
              className="group relative flex flex-col overflow-hidden cursor-pointer"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  key={film.id}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  src={IMAGE_URL + film.backdrop_path}
                  alt={film.id}
                  onClick={() => handleShowDetails(film.id)}
                />
              </div>
            </div>
          ))}
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
