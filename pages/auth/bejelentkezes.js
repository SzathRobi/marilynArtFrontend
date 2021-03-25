import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import Router from "next/router"
import { setCookie } from "nookies"
import styles from "../../styles/auth/Login.module.css";
import {TextField} from "@material-ui/core"

const Login = () => {

  const [email, setEmail] = useState("")
  const updateEmail = (e) => setEmail(e.target.value)

  const [password, setPassword] = useState("")
  const updatePassword = (e) => setPassword(e.target.value)

  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const emailStyle = {
    borderBottom: isEmailError ? "2px solid red" : "1px solid #666",
    margin: isEmailError ? 0 : "1rem 0"
  }
  const passwordStyle = {
    borderBottom: isPasswordError ? "2px solid red" : "1px solid #666",
    margin: isPasswordError ? 0 : "1rem 0"
  }
  const errorTextStyle = {
    color: "red",
    fontSize: "0.8rem",
    position: "absolute",
    bottom: "-2rem",
    right: 0
  }

  const onEmailBlur = () => {
    if(email === "") {
      setIsEmailError(true)
    }
    return
  }

  const onPasswordBlur = () => {
    if(password === "") {
      setIsPasswordError(true)
    }
    return
  }

  const userLogin = async(e) =>{
    e.preventDefault()
    if(email === "") {
      setIsEmailError(true)
      if(password === "") {
        setIsPasswordError(true)
      }
      return
    }

    setEmail(false)
    setIsPasswordError(false)
    const loginInfo = {
      identifier: email,
      password: password
    }

    const login = await fetch("https://marilynart-backend.herokuapp.com/auth/local" /*"http://localhost:1337/auth/local"*/, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  })

    const loginResponse = await login.json()

    console.log(loginResponse)
    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
    setCookie(null, "user", loginResponse.user.email, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })

    setEmail("")
    setPassword("")
    Router.push("/")
  }

  return (
    <div className={styles.login}>
      <img className={styles.loginSvg} src="/login.svg" alt="login-img" />
      <form>
        <h1 className={styles.formTitle}>LOGIN</h1>
        <div className={styles.inputContainer}>
          <h3 className={styles.formSubTitle}>EMAIL:</h3>
          <TextField 
            className={styles.formInput} 
            style={emailStyle} 
            type="text" 
            value={email} 
            onChange={updateEmail} 
            onFocus={() => {setIsEmailError(false)}}
            onBlur={onEmailBlur}
          />
          {isEmailError && <p style={errorTextStyle}>Kérjuk ne hagyja ezt a mezőt üresen!</p>}
        </div>
        <div className={styles.inputContainer}>
          <h3 className={styles.formSubTitle}>JELSZÓ:</h3>
          <TextField 
            className={styles.formInput} 
            style={passwordStyle} 
            type="password" 
            value={password} 
            onChange={updatePassword} 
            onFocus={() => {setIsPasswordError(false)}}
            onBlur={onPasswordBlur}
          />
          {isPasswordError && <p style={errorTextStyle}>Kérjuk ne hagyja ezt a mezőt üresen!</p>}
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.button} onClick={userLogin}>LOGIN</button>
          <p className={styles.loginRegLink}>
            <Link href="/auth/regisztracio"><a>Ha még nem regisztráltál itt megteheted!</a></Link>
          </p>
        </div>
        
      </form>
    </div>
  );
};

/*
export async function getServerSideProps() {

  const loginInfo = {
    identifier: "test@test.com",
    password: "test1234"
  }

  const login = await fetch("https://marilynart-backend.herokuapp.com/auth/local", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  })

  const loginResponse = await login.json()

  return {
    props: {
      authData: loginResponse
    }
  }
}*/

export default Login;
