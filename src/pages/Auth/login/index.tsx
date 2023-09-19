import React, { useState } from "react";

import "../common-scss/style.scss";
import "./scss/style.scss";
import login_pic from "../../../assets/auth_pic/login.png";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";


const Login: React.FC<object> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // const handleLogin = () => {
  //   // Your login logic here
  //   // For simplicity, we'll assume login is successful if email and password are not empty
  //   if (email.trim() !== "" && password.trim() !== "") {
  //     // Redirect to the home page on successful login
  //     navigate("/")
  //   } else {
  //     // Show an error message or handle login failure
  //     setError("Invalid credentials. Please try again.");
  //     setSnackbarOpen(true)
  //   }
  // };

  const handleLogin = () => {
    if (email === "" || password === "") {
      // Both email and password are empty, set the error state to true
      setError("Invalid credentials. Please try again.");
      setSnackbarOpen(true);
    } else {
      // At least one field is not empty, clear the error state
      setError("");
      // Continue with your login logic here (e.g., navigate to home page)
      navigate("/");
    }
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  } 

  return (
    <div className="container">
      <div className="box_frame">
        <div className="header_pic">
          <h1>
            <img className="login_img" src={login_pic} alt="Login Image" />
          </h1>
          <h2>
            LOGIN
          </h2>
        </div>
        <div className="input_boxes">
          <Input
            type="text"
            label="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error = {error? true: false}
            errorText={error ? "Invalid credentials. Please try again." : ""}
          />
          <Input
            type="password"
            label="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error = {error? true: false}
            errorText={error ? "Invalid credentials. Please try again." : ""}
          />
          <Button type="button" label="LOGIN" onClick={handleLogin} />
          <p> If you don't have an account, <span>register here. </span> </p>
          {snackbarOpen && (
          <Snackbar 
          open 
          anchorOrigin={{vertical:"top", horizontal: "center"}}
          autoHideDuration={2000} 
          onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
)}
        </div>
      </div>
    </div>
  );
};

export default Login;
