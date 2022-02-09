import { Link } from "react-router-dom";
import { GiLargeDress } from "react-icons/gi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Login from "../google login/Login";
import Logout from "../google login/Logout";

function Header() {
  return (
    <div className="header">
      <div className="links">
        <Link to="/"> home</Link>
        <Link to="/dresses">
          <GiLargeDress />
        </Link>
        <Link to="/my-items">
          <AiOutlineFileAdd />
        </Link>
        <Link to="/wishlist" className="wish">
          <BsHeart />
        </Link>
      </div>
      <div
        className="login"
        style={{ display: "flex", flexDirection: "row", margin: "2%" }}
      >
        <Login />
        <Logout />
      </div>
    </div>
  );
}

export default Header;
