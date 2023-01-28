import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MOVIE_API, REQUESTS } from "../constants/url";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const temp = [];
    await Promise.all(
      REQUESTS.map(async ({ key, value }) => {
        const result = await axios.get(MOVIE_API + value + API_KEY);
        if (result?.data?.results) {
          temp.push({ key: [key], value: result?.data?.results });
        }
      })
    );

    setMovies(temp);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {movies.length < 8 ? (
        <div className="flex h-screen justify-center items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="bg-black py-8">
          {REQUESTS.map((req) => (
            <Movie
              key={req.key}
              genre={req.key}
              films={movies.filter((m) => m.key == req.key)[0].value}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
