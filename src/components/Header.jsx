import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const navigation = { name: "Movie App", href: "/" };
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
const image_url = "https://image.tmdb.org/t/p/w500/";

export default function Header() {
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    image: "",
  });

  const getBg = async () => {
    const result = await axios.get(url);
    if (result?.data) {
      setMovie((prevState) => ({
        ...prevState,
        title: result?.data?.original_title,
        overview: result?.data?.overview,
        image: image_url + result?.data?.backdrop_path,
      }));
    }
  };

  useEffect(() => {
    getBg();
  }, []);

  return (
    <>
      {movie.image === "" ? (
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
        <div
          style={{ backgroundImage: `url(${movie.image})` }}
          className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 bg-no-repeat w-full h-full bg-cover"
        >
          <div className="flex h-16 justify-between">
            <div className="flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <a
                  href={navigation.href}
                  className="text-lg font-bold text-ag_red hover:text-blue-500"
                >
                  {navigation.name}
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <div className="flex w-full items-center justify-between border-b border-indigo-500 pt-24 lg:border-none">
                <div className="flex items-center">
                  <div className="hidden space-x-8 lg:block">
                    <p className="text-4xl text-white font-bold hover:text-blue-500">
                      {movie.title ?? ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-indigo-500 pt-12 lg:border-none">
                <div className="flex items-center">
                  <div className="space-x-4">
                    <a
                      href="#"
                      className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-header_blue hover:bg-opacity-75"
                    >
                      Play
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-header_blue hover:bg-blue-50"
                    >
                      My List
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-indigo-500 pt-6 pb-12 lg:border-none">
                <div className="flex items-center">
                  <div className="hidden space-x-8 lg:block">
                    <p className="text-sm text-white hover:text-blue-500">
                      {movie.overview ?? ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
