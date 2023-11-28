import Footer from "./footer";
import Header from "./header";
import MovieBanner from "./movieBanner";
import MovieList from "./movieList";
const Main = () => {
  return (
    <div>
      <Header title="Home" />
      <MovieBanner />
      <MovieList />
      <Footer />
    </div>
  );
};

export default Main;
