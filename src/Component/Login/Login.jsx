import React from "react";
import { GoogleLogin } from "@moeindana/google-oauth";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GoogleLogin
        onSuccess={(response) => {
          console.log(response);
          var decoded = jwt_decode(response.credential);
          console.log(decoded)
          // pass decoded data to Voter component
          navigate("/Voter", { state: decoded });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Login;
