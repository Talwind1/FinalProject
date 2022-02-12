import { Link } from "react-router-dom";
import { GiLargeDress } from "react-icons/gi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Login from "../google login/Login";
import Logout from "../google login/Logout";
import { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function Header({ setIsLogged }) {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let name = window.localStorage.getItem("userName");
    if (name) {
      name = capitalize(name);
      setUserName(name);
    }
  }, [userName]);

  const capitalize = (location) => {
    let splited = location.split(" ");
    let name = "";
    splited.forEach(
      (word) =>
        (name =
          name + " " + word[0].toUpperCase() + word.toLowerCase().substring(1))
    );
    return name;
  };

  return (
    <div className="header">
      <div className="links">
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
        className="title"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5%",
        }}
      >
        {" "}
        <Link to="/">One Night Dress</Link>
      </div>
      <div
        className="login"
        style={{
          margin: "2%",
        }}
      >
        {userName ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link to="/signin">
              {" "}
              <AiOutlineUser />
            </Link>{" "}
            {/* <div className="hello-navbar"> */}
            {/* <h4>Welcome </h4>
              <h4> {userName}</h4> */}
            <Logout name={userName} nameFunc={setUserName} />
            {/* </div> */}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link to="/">
              {" "}
              <AiOutlineUserAdd />{" "}
            </Link>{" "}
            <Login name={userName} nameFunc={setUserName} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
