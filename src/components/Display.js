import React from "react";

function QuoteDisplay({ currentQuote, currentImage }) {
  return (
    <div>
      <p>"{currentQuote.text}"</p>
      {currentQuote.author && <p>- {currentQuote.author}</p>}
      {currentImage && <img src={currentImage} alt="Random Nature" />}
    </div>
  );
}

export default QuoteDisplay;
