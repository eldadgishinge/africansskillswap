import React from "react";
import { GoogleLogin } from "react-google-login";
//import { useHistory } from "react-router-dom";


const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com";

export default function Signin() {
  //const history = useHistory();

  const onSuccess = (response) => {
    console.log(response);
    // Redirect to the home page
  
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <form className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold underline text-center">
            Sign in
          </h1>
          {/* <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 rounded-md p-2"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 rounded-md p-2"
          />
          <button className="bg-black text-white rounded-md p-2">Sign in</button>
          <a href="/Signup" className="text-blue-500 text-center">Create an account</a> */}
          {/* Render GoogleLogin component directly */}
          
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
