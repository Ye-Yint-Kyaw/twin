// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { RegisterType } from "../../types/auth";
import "../common-scss/style.scss";
import sign_pic from "../../../assets/auth_pic/signup.png";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";



const Register: React.FC<object> = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSignup = () => {
    if (email === "" || password === "") {
      // Both email and password are empty, set the error state to true
      setError("Invalid credentials. Please try again.");
      setSnackbarOpen(true);
    } else {
      // At least one field is not empty, clear the error state
      setError("");
      // Continue with your login logic here (e.g., navigate to home page)
      navigate("/login");
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
          <img className="login_img" src={sign_pic} alt="Login Image"/>
        </h1>
        <h2>
          SIGNUP
        </h2>
      </div>
      <div className="input_boxes">
      <Input
            type="text"
            label="Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error = {error? true: false}
            errorText={error ? "Invalid credentials. Please try again." : ""}
          />
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
        <Button type="submit" label="SIGN UP" onClick={handleSignup}/>
        <p> If you already have an account, <span>login here.</span>  </p>
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

export default Register;
