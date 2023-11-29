// MovieDetails.js

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";

const MovieDetails = () => {
  const { id } = useParams(); // Accessing the movie ID from the route parameter
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "066efbeaf61c35df76b72385c091eadb";
        const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}`;
        const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

        const params = {
          api_key: apiKey,
          language: "en-US",
        };

        const response = await axios.get(movieDetailsUrl, { params });
        const movieData = response.data;

        // Create an object with the necessary movie details
        const movieDetails = {
          title: movieData.title,
          posterUrl: movieData.poster_path
            ? `${imageBaseUrl}${movieData.poster_path}`
            : null,
          overview: movieData.overview,
          releaseDate: movieData.release_date,
          rating: movieData.vote_average,
        };

        setMovieDetails(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Render loading state while fetching data
  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header title={movieDetails.title} />
      <section className="movie-details">
        <div className="left-column">
          <img
            src={movieDetails.posterUrl}
            alt={movieDetails.title}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="right-column-container">
          <p className="movie-title-details">
            <span>Title:</span> {movieDetails.title}
          </p>
          <p className="movie-details-description">
            <span>Summary:</span> {movieDetails.overview}
          </p>
          <p className="movie-title-date">
            <span>Release Date:</span> {movieDetails.releaseDate}
          </p>
          <p className="movie-title-rating">
            <span>Rating:</span> {movieDetails.rating}
          </p>
          <Link to="/">
            <button>Back to Homepage</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MovieDetails;