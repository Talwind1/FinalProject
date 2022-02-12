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
      <div className="title">
        <div
          style={{ height: "100%", width: "20%", border: "1px  white solid" }}
        >
          hi
        </div>
        <Link to="/">One Night Dress</Link>
      </div>
      <div
        className="login"
        style={{
          // display: "flex",
          // flexDirection: "row",
          margin: "2%",
          // alignItems: "flex-end",
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
              <AiOutlineUserAdd />
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
              <AiOutlineUser />{" "}
            </Link>{" "}
            <Login name={userName} nameFunc={setUserName} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
