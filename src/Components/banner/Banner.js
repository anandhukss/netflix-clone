import React from "react";
import './Banner.css'

function Banner() {
  return (
    <div  className="banner">
        {/* <img className="bannerImage" src="https://wallpaperaccess.com/full/2703652.png" alt="" /> */}
      <div className="content">
        <h1 className="title">Movie name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h2 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          officiis debitis animi eos odit eius consequuntur quas id at,
          repellendus deserunt officia quo inventore eum dolorum magni nobis
          iusto perspiciatis.
        </h2>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
