import React, { useEffect, useState } from "react";
import axios from "../../API/axios/axios";
import requests from "../../API/Requests/Requests";
import "./Banner.css"
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  const truncate = (string, n) => {
return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My list</button>
        </div>
        <h2 className="banner-description">
          {truncate(
            movie.overview, 150
          )}
          </h2>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
    
  );
};

export default Banner;
