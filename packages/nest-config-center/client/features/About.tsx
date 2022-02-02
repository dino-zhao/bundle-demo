import { Input } from "antd";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    fetch("/api/users").then((res) => res.json().then((i) => console.log(i)));
  }, []);
  return (
    <div>
      <Input value="ddd"></Input>
    </div>
  );
}
