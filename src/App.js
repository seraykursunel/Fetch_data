import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [cat, setCat] = useState([]);

  async function fetchCat() {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4"
    );
    const cat = await res.json();
    // console.log(cat)
    const href = cat;
    setCat(href);
  }
  const catData = cat.map((cat) => (
    <img src={cat.url} alt="cat" width="300px" />
  ));

  useEffect(() => {
    // const resp = await fetchCat();
    // console.log(resp);
    fetchCat();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>{catData}</div>
    </div>
  );
}
