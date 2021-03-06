// import react from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./Utils.js";
import dressesApi from "../../api/api";
function Login() {
  const clientId =
    "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";
  //process.env.CLIENT_ID;

  const handleLogin = async (res) => {
    console.log(res.googleId); //?
    console.log(res.profileObj);
    console.log(clientId);
    await window.localStorage.setItem("userToken", res.googleId);
    //  console.log(window.localStorage);
    console.log(res.googleId, res.profileObj.email, res.profileObj.name);
    const user = {
      id: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
    };
    console.log(user);
    const done = await dressesApi.post("/users", user);
    refreshTokenSetup(res);
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
