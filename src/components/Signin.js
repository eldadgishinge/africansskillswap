import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import logosign from "./logosign.png";


const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com";

export default function Signin() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (response) => {
    console.log(response);
    setIsLoggedIn(true);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  if (isLoggedIn) {
    history.push("/Home");
  }

  return (
    
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800  p-8 rounded-md shadow-md max-w-md w-full">
        <img
          src={logosign}
          alt="Google logo"
          className="w-20 h-20 mx-auto"
        />
        <form className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">SIGN IN</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </form>
      </div>
    </div>
  );
}
