import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
const clientId =
  "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";

function Logout({ name, nameFunc }) {
  const navigate = useNavigate();
  //
  const onSuccess = () => {
    try {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      localStorage.setItem("logged", false);
      nameFunc(null);
      navigate("/");
    } catch (e) {
      console.table(e);
    }
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Signout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
