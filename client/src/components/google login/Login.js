// import react from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./Utils.js";

function Login() {
  const clientId =
    "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";
  //process.env.CLIENT_ID;

  const handleLogin = (res) => {
    console.log(res.googleId); //?
    console.log(res.profileObj);
    console.log(clientId);
    refreshTokenSetup(res);

    //send the ID token to our own API:
    // store returned user somehow
  };

  // const handleLogin = async (googleData) => {
  //   const res = await fetch("/api/v1/auth/google", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   // store returned user somehow
  // };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
}

export default Login;
