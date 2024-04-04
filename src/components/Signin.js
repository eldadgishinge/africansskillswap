import React, { useState, createContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import logo from "./logosign.png";
import { useUserContext } from "../context/UserContext";
import { UserProvider } from "../context/UserContext";

const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com";

// Step 1: Create a context
export const UserContext = createContext();

export default function Signin() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user, setUser} = useUserContext();
  const onSuccess = (response) => {
    console.log("success ", response);
    if (response.profileObj) {
      // history.push("/Home");
      setUser(response.profileObj);
    }
    setIsLoggedIn(true);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  // if (isLoggedIn) {
  //   history.push("/");
  // }

  return (
    <UserProvider>
    // Step 2: Wrap your component tree with the context provider
    <UserContext.Provider value={user}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800  p-8 rounded-md shadow-md max-w-md w-full">
          <img
            src={logo}
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
    </UserContext.Provider>
    </UserProvider>
  );
}
