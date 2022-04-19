import { Component } from 'react';
import "./login.css";
import LoginComponent from "../../assets/loginComponent.png";
import { useNavigate } from 'react-router-dom';
import {auth, provider} from "../../Firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";

    
const Login = ({SetUserData, SetIsAuth}) =>{
    let navigate = useNavigate();
        const SignInWithGoogle = () =>{
            signInWithPopup(auth, provider)
            .then((re)=>{
                SetIsAuth(true);
                window.localStorage.setItem("isAuth", true);
                SetUserData(re.user);
                navigate("/dashboard");
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-form-header">
                        <h1>Sign In</h1>
                        <div className="logo">
                            <h1 className="hed_1">Skill</h1>
                            <h1 className="hed_2">Adhyan</h1>
                        </div>
                    </div>
                    <img src={LoginComponent} alt="logo"></img>
                    <p>Get Started Wth The Best Upcomming Online Platform</p>
                    <button className="login-button" onClick={SignInWithGoogle}>SignIn with Google</button>
                </div>
            </div>
        )
}

export default Login;