import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com"
function Login() {
  const onSuccess = (response) => {
    
    console.log(response);
  };
  const onFailure = (response) => {
    console.log(response);
  };
  return (
    <div id="signinButton">
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
    </div>
  );
}

export default Login;