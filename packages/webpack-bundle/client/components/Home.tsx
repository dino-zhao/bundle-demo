import React from "react";
import Query from "./Query";
import Counter from "./Counter";
import Book from "./Book";

export default function Home() {
  return (
    <div>
      <Counter />
      <Query />
      <Book />
    </div>
  );
}
