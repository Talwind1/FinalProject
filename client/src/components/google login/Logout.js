import { GoogleLogout } from "react-google-login";
const clientId =
  "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";

function Logout({ name, nameFunc }) {
  const onSuccess = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    nameFunc(null);
    console.log(localStorage);
    alert("Logout made successfully✌️");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign out"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
