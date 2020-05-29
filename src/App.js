import React, { useState, useEffect } from "react";
import Container from "./Components/Container";
import API from "./utils/API";
import "./App.scss";

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.fetchRestaurants().then(res => {
      setRestaurants(res);
      setIsLoaded(true);
    });
  }, []);


  return (
    <Container>

    </Container>
  );
}

export default App;
