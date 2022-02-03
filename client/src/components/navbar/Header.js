import { Link } from "react-router-dom";
import { GiLargeDress } from "react-icons/gi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Login from "./Login";
import Logout from "./Logout";

function Header({ whoIsIn }) {
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
        <Link to="/wishlist/" className="wish">
          <BsHeart />
        </Link>
      </div>
      <div className="login">
        <Login whoIsIn={whoIsIn} />
        <Logout />
      </div>
    </div>
  );
}

export default Header;