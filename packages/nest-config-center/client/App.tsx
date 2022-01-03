import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
export default function App() {
  useEffect(() => {
    fetch("/users").then((res) => res.json().then((i) => console.log(i)));
  }, []);

  useEffect(() => {
    console.log(222);
  }, []);

  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1 onClick={() => setCounter((c) => c + 1)}>counter:{counter}</h1>
      <Link to="/about">Home</Link>
      <Routes>
        <Route path="/ww" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
