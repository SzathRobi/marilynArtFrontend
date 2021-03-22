import React, { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/auth/Login.module.css";

const Login = () => {

  const [email, setEmail] = useState("")
  const updateEmail = (e) => setEmail(e.target.value)

  const [password, setPassword] = useState("")
  const updatePassword = (e) => setPassword(e.target.value)

  const userLogin = async(e) =>{
    e.preventDefault()
    const userObject = {
      email: email,
      password: password,
    }


    console.log(userObject)


    setEmail("")
    setPassword("")
  }

  return (
    <div className={styles.login}>
      <Image src="/login.svg" alt="login-img" />
      <form>
        <h1>LOGIN</h1>
        <div className={styles.inputContainer}>
          <h3>EMAIL:</h3>
          <input type="text" onChange={updateEmail} />
        </div>
        <div className={styles.inputContainer}>
          <h3>JELSZÓ:</h3>
          <input type="password" onChange={updatePassword} />
        </div>
        <button onClick={userLogin}>LOGIN</button>
        <p className={styles.loginRegLink}>
          <Link to="/regisztráció">Ha még nem regisztráltál itt megteheted!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
