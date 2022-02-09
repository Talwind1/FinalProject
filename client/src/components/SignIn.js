import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./google login/Login";
import { BsHeartFill } from "react-icons/bs";
function SignIn() {
  let history = useHistory();
  return (
    <div id="signin">
      <div
        style={{
          margin: "auto",
          backgroundColor: "#f0d9ff",
          padding: "5%",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
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
            <div style={{}}>
              <BsHeartFill />
            </div>
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
