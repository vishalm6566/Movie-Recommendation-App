import React, { useEffect, useState } from "react";

import Spinner from "./Spinner"
import Navbar from "./Navbar";
import "./App.css"


const AppNews = () => {
  const [movieData, setMovieData] = useState(null)
  const [title, setTitle] = useState("the avengers")
  const [loading, setLoading] = useState(false);
  const setMovie = (title) => {
    setTitle(title)
  }
  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line
  }, []);
  const getMovieData = () => {
    // console.log(process.env.A);
    // console.log(title)
    let url = `https://omdbapi.com/?t=${title}&apikey=82bb6378`;
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data)


        setLoading(false)
      })
      .catch((err) => console.log("error"))


  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ height: "50px", marginTop: "15px" }}
            onChange={(e) => {
              setMovie(e.target.value)
            }}
          />
          <button onClick={getMovieData} style={{ height: "50px", marginTop: "15px" }}>

            Get Movie

          </button>

        </div>
        {loading && <Spinner />}
        <hr style={{ height: '5px' }} />
        {movieData?.Response === "True" ? (
          <div className="row justify-content-md-center">


            <div className="col col-lg-0">
              <div className="card" style={{ width: "23rem", height: "500px" }}>
                <img
                  src={movieData?.Poster}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "100%" }}
                />
              </div>
            </div>

            <div className="col-md-6 my-5">
              <h5><b>Movie Name</b>:-{movieData?.Title}</h5>
              <h5><b>Relesed Date</b>:-{movieData?.Released}</h5>
              <h5><b>Time Period</b>:-{movieData?.Runtime}</h5>
              <h5><b>Director</b>:-{movieData?.Director}</h5>
              <h5><b>Writer</b>:-{movieData?.Writer}</h5>
              <h5><b>Actors</b>:-{movieData?.Actors}</h5>
              <h5><b>Boxoffice</b>:-{movieData?.BoxOffice}</h5>
              <h5><b>Show Type</b>:-{movieData?.Type}</h5>
              <h5><b>Language</b>:-{movieData?.Language}</h5>
              <h5><b>ImdbRating</b>:-{movieData?.imdbRating}</h5>
              <h5><b>Awards</b>:-{movieData?.Awards}</h5>
              <h5><b>description</b>:-{movieData?.Plot}</h5>
            </div>
          </div>) :
          (
            <div className="card">
              <div className="card-body">

                <p className="card-text">
                  Movie Not Found!...Please Enter Valid Name Of Movie
                </p>

              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default AppNews;
