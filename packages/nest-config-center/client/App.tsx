import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("/users").then((res) => res.json().then((i) => console.log(i)));
  }, []);
  return <div>dddww</div>;
}
