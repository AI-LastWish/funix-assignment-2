export const MOVIE_API = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
export const SEARCH_URL = "/search/movie?language=en-US&api_key=";
export const ENDPOINT_TO_TITLE = {
  fetchTrending: "",
  fetchNetflixOriginals: "Xu hướng",
  fetchTopRated: "Xếp hạng cao",
  fetchActionMovies: "Hành động",
  fetchComedyMovies: "Hài",
  fetchHorrorMovies: "Kinh dị",
  fetchRomanceMovies: "Lãng mạn",
  fetchDocumentaries: "Tài liệu",
};
export const REQUESTS = [
  { key: "fetchTrending", value: "/trending/all/week?language=en-US&api_key=" },
  {
    key: "fetchNetflixOriginals",
    value: "/discover/tv?with_network=123&api_key=",
  },
  { key: "fetchTopRated", value: "/movie/top_rated?language=en-US&api_key=" },
  {
    key: "fetchActionMovies",
    value: "/discover/movie?with_genres=28&api_key=",
  },
  {
    key: "fetchComedyMovies",
    value: "/discover/movie?with_genres=35&api_key=",
  },
  {
    key: "fetchHorrorMovies",
    value: "/discover/movie?with_genres=27&api_key=",
  },
  {
    key: "fetchRomanceMovies",
    value: "/discover/movie?with_genres=10749&api_key=",
  },
  {
    key: "fetchDocumentaries",
    value: "/discover/movie?with_genres=99&api_key=",
  },
];
