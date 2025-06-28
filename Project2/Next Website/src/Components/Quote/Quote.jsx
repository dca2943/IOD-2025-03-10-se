import React, { useState } from "react";
import styles from "./Quote.module.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");

  const quotes = [
    "The world is a book and those who do not travel read only one page.",
    "Life is short and the world is wide.",
    "Travel brings power and love back into your life.",
    "Not all those who wander are lost.",
    "To travel is to live.",
  ];

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={styles.quoteContainer}>
      <h2> Never Sop Exploring🌍</h2>
      <button onClick={handleGenerate}>Inspire Me</button>
      {quote && <p className={styles.quoteText}>"{quote}"</p>}
    </div>
  );
};

export default Quotes;
