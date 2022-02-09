import react from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "514442198747-km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully✌️");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
