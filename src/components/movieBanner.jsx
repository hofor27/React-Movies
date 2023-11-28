import banner from "../assets/banner.jpg";

const MovieBanner = () => {
  return (
    <div>
      <img
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        src={banner}
        alt=""
      />
    </div>
  );
};

export default MovieBanner;
