import React, { useState, useEffect } from "react";
import "./styles.css";
import Display from "./components/Display";
import Button from "./components/Button";
import axios from "axios";

function App() {
  // State variables of current quote, and current image
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});
  const [currentImage, setCurrentImage] = useState("");

  // useEffect to fetch quotes and a random image
  useEffect(() => {
    fetchQuotes();
    fetchRandomImage();
  }, []);

  const fetchQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data);
    // Set the initial current quote
    setCurrentQuote(data[0]);
  };

  const fetchRandomImage = async () => {
    const api_url = "https://picsum.photos/400";

    try {
      const response = await axios.get(api_url, {
        responseType: "arraybuffer"
      });

      //  set to base64 format
      const imageBase64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      // Set current image
      setCurrentImage(`data:image/jpeg;base64, ${imageBase64}`);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Set the new random quote
    setCurrentQuote(quotes[randomIndex]);
  };

  // Render the components
  return (
    <div className="App">
      <header className="App-header">
        <h1>Motivational Quotes</h1>
        <Display currentQuote={currentQuote} currentImage={currentImage} />
        <Button getRandomQuote={getRandomQuote} />
      </header>
    </div>
  );
}

export default App;
