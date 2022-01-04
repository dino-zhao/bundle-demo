import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
export default function App() {
  useEffect(() => {
    fetch("/api/users").then((res) => res.json().then((i) => console.log(i)));
  }, []);

  useEffect(() => {
    console.log(222);
  }, []);

  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1 onClick={() => setCounter((c) => c + 1)}>counter:{counter}</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">about</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
