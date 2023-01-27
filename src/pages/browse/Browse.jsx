import React from "react";
import MovieList from "../../components/MovieList";
import Banner from "../../components/Banner";

const movies = [
  {
    id: 550,
    title: "Fight Club",
    url: "https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  },
  {
    id: 551,
    title: "The Poseidon Adventure",
    url: "https://image.tmdb.org/t/p/w500/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
  },
  {
    id: 552,
    title: "Pane e tulipani",
    url: "https://image.tmdb.org/t/p/w500/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
  },
  {
    id: 553,
    title: "Fight Club",
    url: "https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  },
  {
    id: 554,
    title: "The Poseidon Adventure",
    url: "https://image.tmdb.org/t/p/w500/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
  },
  {
    id: 555,
    title: "Pane e tulipani",
    url: "https://image.tmdb.org/t/p/w500/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
  },
  {
    id: 556,
    title: "Fight Club",
    url: "https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  },
  {
    id: 557,
    title: "The Poseidon Adventure",
    url: "https://image.tmdb.org/t/p/w500/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
  },
  {
    id: 558,
    title: "Pane e tulipani",
    url: "https://image.tmdb.org/t/p/w500/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
  },
  {
    id: 559,
    title: "Fight Club",
    url: "https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  },
  {
    id: 560,
    title: "The Poseidon Adventure",
    url: "https://image.tmdb.org/t/p/w500/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
  },
  {
    id: 561,
    title: "Pane e tulipani",
    url: "https://image.tmdb.org/t/p/w500/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
  },
];

function Browse() {
  return (
    <div className="app">
      <Banner />
      <MovieList movies={movies} />
    </div>
  );
}

export default Browse;
