import axios from "axios";
import { useEffect, useState } from "react";
import { MOVIE_API, SEARCH_URL } from "../constants/url";
import { ColorRing } from "react-loader-spinner";
import ResultTemplate from "./ResultTemplate";

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchResult = () => {
  const defaultSearch =
    window.location.search.substring(7) !== ""
      ? window.location.search.substring(7)
      : "";
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const result = await axios.get(
        MOVIE_API + SEARCH_URL + API_KEY + `&query=${defaultSearch}`
      );
      const res = result?.data?.results;

      if (res && res.length > 0) {
        setMovies(res);
      }
    } catch {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <div className="bg-black py-8">
          {/* <Movie genre="Search Result" films={movies} /> */}
          <ResultTemplate genre="Search Result" films={movies} />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SearchResult;
