import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>Homepage</div>
      <button onClick={() => console.log("click eee22")}>click me</button>
      <Link to="/users">To users page</Link>
    </div>
  );
};

export default Home;
