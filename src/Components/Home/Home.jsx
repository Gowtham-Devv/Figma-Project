import React from "react";
import Header from "./Header";
import Aboutus from "./Aboutus";
import "./Home.css";


function Home() {
  return (
    <div className="h-100 bgr">
      <Header />
      <div>
        <Aboutus />
      </div>
    </div>
  );
}

export default Home;
