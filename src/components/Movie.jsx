import React from "react";
import { IMAGE_URL, ENDPOINT_TO_TITLE } from "../constants/url";

const Movie = ({ genre, films }) => {
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
                  alt="/"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
