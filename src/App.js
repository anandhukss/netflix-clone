import React from "react";
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import "./App.css";
import RowPost from "./Components/rowpost/RowPost";
import {
  actionUrl,
  originalsUrl,
  comedyUrl,
  romanceUrl,
  documentUrl,
  horrorUrl,
} from "../src/urls";

function App() {
  const categories = [
    { title: "Netflix originals", url: originalsUrl },
    { title: "Action", isSmall: true, url: actionUrl },
    { title: "Comedy", isSmall: true, url: comedyUrl },
    { title: "Horror", isSmall: true, url: horrorUrl },
    { title: "Series", isSmall: true, url: documentUrl },
    { title: "Romance", isSmall: true, url: romanceUrl },

    

    
  ];

  return (
    <div className="App">
      <Navbar />
      <Banner />
      {categories.map((categoryObj,index) => {
       return <RowPost key={index} {...categoryObj} />;
      })}
    </div>
  );
}

export default App;
