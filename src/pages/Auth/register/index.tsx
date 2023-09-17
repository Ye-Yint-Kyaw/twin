// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { RegisterType } from "../../types/auth";
import "../common-scss/style.scss";
import sign_pic from "../../../assets/auth_pic/Sign_Up.png";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";



const Register: React.FC<object> = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="container">
    <div className="box_frame">
      <div className="header_pic">
        <h1>
          <img className="login_img" src={sign_pic} alt="Login Image"/>
        </h1>
      </div>
      <div className="input_boxes">
        <Input type="search" label="Full name*" />
        <Input type="search" label="Email*" />
        <Input type="password" label="Password*"/>
        <Button type="submit" label="SIGN UP"/>
      </div>
    </div>
  </div>
  );
};

export default Register;
