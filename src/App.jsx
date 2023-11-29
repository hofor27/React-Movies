import Homepage from "./Pages/Homepage";
import MovieDetails from "./Pages/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;