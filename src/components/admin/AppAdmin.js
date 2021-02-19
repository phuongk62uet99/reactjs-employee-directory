import Content from "./Content";
import Header from "./Header";
import SliderBar from "./SliderBar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function AppAdmin() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [link, setLink] = useState(true);

  useEffect(() => {
    var position = window.location.href.indexOf("login");
    if (position == -1) {
      setLink(false);
    }
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
