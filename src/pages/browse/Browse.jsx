import React from "react";
import MovieList from "../../components/MovieList";
import Banner from "../../components/Banner";

function Browse() {
  return (
    <div className="app">
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
