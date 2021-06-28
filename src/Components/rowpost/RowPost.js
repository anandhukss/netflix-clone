import React, { useState, useEffect } from "react";
import { apiKey, imageUrl } from "../../constants/constants";
import axios from "axios";
import "./RowPost.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [youtube, setYoutube] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  let movieHandler = (id) => {
    let url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    axios.get(url).then((response)=>{
      let videoKey=response.data.results[0]
      if(videoKey){
        setYoutube(<YouTube  videoId={videoKey?videoKey.key:"SqSiUVUvVCE"} opts={ {height: '390',width: '100%', playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },}} />)
      }else{
        setYoutube(<h1 className="alert">OOPS!! video not found</h1>)
      }
   
    }).catch(()=>{
      setYoutube(<h1 className="alert">OOPS!! video not found</h1>)
    });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((obj, index) => {
          return (
            <img
              key={index}
              onMouseEnter={() => {
                movieHandler(obj.id);
              }}
              className={props.isSmall ? "small-poster" : "poster"}
              src={obj ? imageUrl + obj.backdrop_path : ""}
              alt=""
            />
          );
        })}
      </div>
      {youtube}
    </div>
  );
}

export default RowPost;
