import { useState } from "react";
import "./App.css";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";
import QuoteCard from "./components/QuoteCard";
quotes;

const backgrounds = ["galax1", "galax2", "galax3", "galax4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard
        quote={quote}
        setQuote={setQuote}
        setCurrentBg={setCurrentBg}
        backgrounds={backgrounds}
      />
    </main>
  );
}

export default App;
