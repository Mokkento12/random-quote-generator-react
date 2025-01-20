import { useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import "./style.css";

const App = () => {
  const [quote, setQuote] = useState({
    content: "Добро пожаловать в генератор цитат!",
    author: "React",
  });

  const generatorRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) throw new Error("Ошибка загрузки цитаты");
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error(error.message);
      alert("Не удалось загрузить цитату.");
    }
  };

  return (
    <div className="app">
      <h1>Генератор цитат</h1>

      <QuoteDisplay content={quote.content} author={quote.author} />
    </div>
  );
};

export default App;
