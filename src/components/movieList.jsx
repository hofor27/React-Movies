import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MovieListSection,
  MovieHeading,
  MovieListItem,
  MovieTitle,
  MoviePoster,
  MovieListGrid,
} from "../styles";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "066efbeaf61c35df76b72385c091eadb";
        const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
        const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // Base URL for poster images

        const params = {
          api_key: apiKey,
          language: "en-US",
          page: 1,
        };

        const response = await axios.get(popularMoviesUrl, { params });
        const moviesData = response.data.results;

        // Fetch movie posters for each movie
        const moviesWithPosters = await Promise.all(
          moviesData.map(async (movie) => {
            const posterUrl = movie.poster_path
              ? `${imageBaseUrl}${movie.poster_path}`
              : null;
            console.log("Poster URL:", posterUrl); // Log the poster URL
            return { ...movie, posterUrl };
          })
        );

        setMovies(moviesWithPosters);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchMovies();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  console.log(movies);
  return (
    <MovieListSection>
      <MovieHeading>Popular Movies</MovieHeading>
      <MovieListGrid>
        {movies.map((movie) => (
          <MovieListItem key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <MoviePoster src={movie.posterUrl} alt={movie.title} />
              <MovieTitle>{movie.title}</MovieTitle>
              <p>Release Date: {movie.release_date}</p>
              <p>Vote Count: {movie.vote_count}</p>
            </Link>
          </MovieListItem>
        ))}
      </MovieListGrid>
    </MovieListSection>
  );
};

export default MovieList;
