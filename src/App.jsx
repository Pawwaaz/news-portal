import React, { useEffect, useState } from "react";
import Menu from "./assets/component/Menu";
import NewsGrid from "./assets/component/NewsGrid";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bea2825af52f41c0b300d3dd19740188` //api key
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">News Update</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
