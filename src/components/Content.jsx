import Movie from "./Movie";

const Content = ({ movies }) => {

  return (
    <>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {movies.map((movie) => (
          <Movie key={movie.id} title={movie.title} url={movie.url} />
        ))}
      </div>
    </>
  );
};

export default Content;
