import Home from "./components/Home";
import UserList from "./components/UserList";
import { Routes, Route } from "react-router-dom";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="users" element={<UserList />}></Route>
    </Routes>
  );
}
