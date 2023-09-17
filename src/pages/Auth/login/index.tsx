// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { LoginType } from "../../types/auth";
import "../common-scss/style.scss";
import "./scss/style.scss";
import login_pic from "../../../assets/auth_pic/Login_In.png";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const Login: React.FC<object> = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="box_frame">
        <div className="header_pic">
          <h1>
            <img className="login_img" src={login_pic} alt="Login Image"/>
          </h1>
        </div>
        <div className="input_boxes">
          <Input type="search" label="Email*" />
          <Input type="password" label="Password*"/>
          <Button type="submit" label="LOGIN"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
