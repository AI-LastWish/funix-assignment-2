import axios from "axios";
import { MOVIE_API, IMAGE_URL } from "../constants/url";
import { useEffect, useState } from "react";
import Video from "./Video";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function MovieDetails({ film, filmId }) {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const url = MOVIE_API + `/movie/${filmId}/videos?api_key=${API_KEY}`;
    try {
      const result = await axios.get(url);
      const res = result?.data?.results;

      if (
        res &&
        res.length > 0 &&
        res.filter(
          (re) =>
            re.site === "YouTube" &&
            (re.type === "Trailer" || re.type === "Teaser")
        ).length > 0
      ) {
        setMovie(res[0]);
      }
    } catch {
      setMovie({});
    }
  };

  useEffect(() => {
    getMovie();
  }, [filmId]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2 text-white">
        <div className="flex w-full items-center justify-between border-b border-white py-6 ">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <p className="text-4xl font-bold text-white hover:text-indigo-50">
                {film?.original_title || film?.original_name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <p className="text-md font-bold text-white hover:text-indigo-50">
                Release Date: {movie?.published_at?.substring(0, 10)}
              </p>
              <p className="text-md font-bold text-white hover:text-indigo-50">
                Vote: {film?.vote_average} / 10
              </p>
              <p className="text-md font-bold text-white hover:text-indigo-50 mt-8">
                {film?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 text-white">
        {movie?.key !== undefined ? (
          <Video videoId={movie?.key} />
        ) : (
          <img
            key={film.id}
            className="h-[400px] w-full bg-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={IMAGE_URL + film.backdrop_path}
            alt={film.id}
          />
        )}
      </div>
    </div>
  );
}
