import React from "react";

function QuoteButton({ getRandomQuote }) {
return <button onClick={getRandomQuote}>Get Another Quote</button>;
}

export default QuoteButton;
