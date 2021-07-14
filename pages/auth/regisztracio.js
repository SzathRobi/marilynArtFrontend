import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { TextField } from "@material-ui/core";
import styles from "../../styles/auth/Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const handleUsername = (event) => setUsername(event.target.value);

  const [email, setEmail] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);

  const [password, setPassword] = useState("");
  const handlePassword = (event) => setPassword(event.target.value);

  const userRegister = async (e) => {
    e.preventDefault();
    const registerInfo = {
      email: email,
      username: username,
      password: password,
    };

    const register = await fetch(
      "https://marilynart-backend.herokuapp.com/auth/local/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      }
    );

    const registerResponse = await register.json();

    console.log(registerResponse);
    setEmail("");
    setPassword("");
    Router.push("/auth/bejelentkezes");
  };

  function ValidateEmail(inputText) {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } else {
      alert("You have entered an invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }
  return (
    <div className={styles.register}>
      <Head>
        <title>MarilynArt/Regisztráció</title>
      </Head>
      <Image src="/register.svg" width={300} height={300} alt="register-img" />
      <form>
        <h1 className={styles.registerTitle}>REGISTER</h1>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.formInput}
            type="email"
            label="EMAIL"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.formInput}
            label="USERNAME"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.formInput}
            type="password"
            label="PASSWORD"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            className={styles.formInput}
            type="password"
            label="CONFIRM PASSWORD"
          />
        </div>
        <button className={styles.button} onClick={userRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
