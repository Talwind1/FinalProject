import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./google login/Login";
import { Redirect } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
function SignIn({ authorized }) {
  let history = useHistory();

  return (
    <div id="page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "futura",
          margin: "auto",
        }}
      >
        <h3>
          Hello beautiful guest <BsHeart />
          <br />
          You have to sign in first{" "}
        </h3>

        <Login />
      </div>
    </div>
  );
}
export default SignIn;
