// import react from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./Utils.js";
import dressesApi from "../../api/api";
import { useHistory } from "react-router-dom";
// import {isSignedIn} from useGoogleLogin

function Login({ name, nameFunc }) {
  // const [name,set]
  const clientId =
    "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";
  //process.env.CLIENT_ID;
  let history = useHistory();
  const handleLogin = async (res) => {
    // console.log(res.googleId);
    // console.log(res.profileObj);
    // console.log(clientId);
    window.localStorage.setItem("userToken", res.googleId);
    window.localStorage.setItem("userName", res.profileObj.name);
    nameFunc(res.profileObj.name);
    // console.log(res.googleId, res.profileObj.email, res.profileObj.name);
    const user = {
      id: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
    };
    await dressesApi.post("/users", user);
    refreshTokenSetup(res);
    history.push("/dresses");
    // console.log(isSignedIn);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={handleLogin}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
