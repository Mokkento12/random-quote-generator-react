import { useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteButton from "./components/QuoteButton";
import "./style.css";

const App = () => {
  const [quote, setQuote] = useState({
    content: "Добро пожаловать в генератор цитат!",
    author: "React",
  });

  const generatorRandomQuote = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = "https://favqs.com/api/qotd";

      const response = await fetch(proxyUrl + apiUrl);
      if (!response.ok) throw new Error("Ошибка загрузки цитаты");
      const data = await response.json();
      setQuote({ content: data.quote.body, author: data.quote.author });
    } catch (error) {
      console.error(error.message);
      alert("Не удалось загрузить цитату.");
    }
  };

  return (
    <div className="app">
      <h1>Генератор цитат</h1>

      <QuoteDisplay content={quote.content} author={quote.author} />
      <QuoteButton onClick={generatorRandomQuote} />
    </div>
  );
};

export default App;
