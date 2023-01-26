import React from "react";

const Movie = ({ title, url }) => {
  return (
    <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
      {title}
    </h2>
  );
};

export default Movie;
