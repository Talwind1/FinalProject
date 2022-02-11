import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import Login from "./google login/Login";
import { BsHeartFill } from "react-icons/bs";
function SignIn() {
  // let history = useHistory();
  // useEffect(() => {
  //   if (isLogged) {
  //     history.push("/my-items");
  //   }
  // });
  return (
    <div id="signin">
      <div className="signin-box">
        <div
          className="sign-message"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1 style={{ padding: "2%", width: "100%", color: "#333" }}>
              Hello Beautiful Guest
            </h1>
          </div>{" "}
          <div style={{}}>
            <BsHeartFill />
          </div>
          <h3 style={{ padding: "2%", width: "100%" }}>
            You have to sign in first{" "}
          </h3>
        </div>{" "}
        <div style={{ padding: "10%" }}>
          <Login />
        </div>
      </div>
    </div>
  );
}
export default SignIn;
