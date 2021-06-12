import React, { useEffect, useState } from "react";
import { apiKey,imageUrl } from "../../constants/constants";
import "./Banner.css";
import axios from "../../axios";

function Banner() {
  const [movie,setMovie]=useState({})
  

useEffect(()=>{
  

  axios.get(`/trending/all/day?api_key=${apiKey}`).then((response)=>{
    
    var number=Math.floor(Math.random() * response.data.results.length);
    setMovie(response.data.results[number])
 
  });
  
},[])


  return (
    
    <div className="banner" style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} >
      {" "}
      <div className="content">
        <h1 className="title"> {movie.original_title?movie.original_title:"Movie Name"} </h1>{" "}
        <div className="banner_buttons">
          <button className="button"> Play </button>{" "}
          <button className="button"> My List </button>{" "}
        </div>{" "}
        <h2 className="description">
        {movie.overview?movie.overview:"description"}
        </h2>{" "}
      </div>{" "}
      <div className="fade-bottom"> </div>{" "}
    </div>
  );
}

export default Banner;
