import React, { useState } from "react";
import register from "./register.svg";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { TextField } from "@material-ui/core";

const Register = () => {

  const [username, setUsername] =useState("")
  const handleUsername = event => setUsername(event.target.value)

  const [email, setEmail] =useState("")
  const handleEmail = event => setEmail(event.target.value)

  const [password, setPassword] =useState("")
  const handlePassword = event => setPassword(event.target.value)

  const createUser = event => {
    event.preventDefault()
    const userObject = {
      username: username,
      email: email,
      password: password
    }
    axios.post("http://localhost:5000/api/user/register/", userObject)
      .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });

    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="login">
      <img src={register} alt="register-img" />
      <form onSubmit={createUser}>
        <h1 className="register-title">REGISTER</h1>
        <div className="input-container">
          <TextField type="email" label="EMAIL" onChange={handleEmail}/>
        </div>
        <div className="input-container">
          <TextField label="USERNAME" onChange={handleUsername}/>
        </div>
        <div className="input-container">
          <TextField type="password" label="PASSWORD" onChange={handlePassword}/>  
        </div>
        <div className="input-container">
          <TextField type="password" label="CONFIRM PASSWORD"/>
        </div>
        <button onClick={createUser}>
          <Link to="/login">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
