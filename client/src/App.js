import "./App.css";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dresses from "../src/components/dresses/Dresses";
import Header from "../src/components/navbar/Header";
import MyItems from "../src/components/userItems/MyItems";
import Home from "../src/components/home/Home";
import Wishlist from "../src/components/wishlist/Wishlist";
import SignIn from "./components/SignIn";
import Login from "./components/google login/Login";
import Dress from "../src/components/dresses/Dress";
// import { useEffect, useState } from "react";

const AuthUser = () => {
  const isLogged = JSON.parse(localStorage.getItem("logged"));
  return isLogged ? <Outlet /> : <Navigate to="/signin" />;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/dress/:id" element={<Dress />} />
        <Route path="/" element={<Home />} />
        <Route element={<AuthUser />}>
          <Route path="/my-items" element={<MyItems />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
