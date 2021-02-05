import Content from "./Content";
import Header from "./Header";
import SliderBar from "./SliderBar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

export default function AppAdmin() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [link, setLink] = useState(true);

  useEffect(() => {
    console.log("LInk : ", window.location.href);
    var position = window.location.href.indexOf("login");
    // logout
    if (position == -1) {
      setLink(false);
    }
    console.log("AppAdmin new ");
  }, []);

  return (
    <Router>
      <section id="container">
        <Header></Header>
        <SliderBar />
        <Content></Content>
      </section>
    </Router>
  );
}
