import React from "react";
import { BsHeartFill } from "react-icons/bs";
function SignIn() {
  return (
    <div className="signin">
      <h1
        style={{
          padding: "1%",
          fontFamily: "futura-pt",
          fontSize: "2rem",
          backgroundColor: "#ddd",
        }}
      >
        Be a part of us
      </h1>
      <div
        style={{
          margin: "auto",
          height: "60%",
          // border: "1px solid black",
          width: "50%",
        }}
      >
        <div className="signin-box">
          <div
            className="sign-message"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "80%",
            }}
          >
            <h1>Join Our Party</h1>
            <h3 style={{ padding: "2%", width: "100%" }}>
              You have to sign in first{" "}
            </h3>{" "}
            <div style={{ padding: "10%" }}>
              <BsHeartFill />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default SignIn;
