import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./Utils.js";
import dressesApi from "../../api/api";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Login({ name, nameFunc }) {
  const clientId =
    "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";
  let navigate = useNavigate();

  const handleLogin = async (res) => {
    window.localStorage.setItem("logged", true);
    window.localStorage.setItem("userToken", res.googleId);
    window.localStorage.setItem("userName", res.profileObj.name);
    nameFunc(res.profileObj.name);
    navigate("/");
    try {
      const user = {
        id: res.googleId,
        name: res.profileObj.name,
        email: res.profileObj.email,
      };
      await dressesApi.post("/users", user);
      console.log("hiiii");
      console.log("workingggg");
    } catch (e) {
      console.table(e);
    }

    refreshTokenSetup(res);
    localStorage.setItem("logged", true);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Join"
        onSuccess={handleLogin}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
