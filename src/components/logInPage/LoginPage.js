import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Context from '../../context/context';
import iconLogo from "../../imgFiles/Dragonfly-Logo-Icon-Small.svg"
import Lottie from 'react-lottie';
import animationData from '../../imgFiles/loadingAnimation.json';
const LogInPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const [message, setMessage] = useState('');
    let [attempts, updateAttempts] = useState(0);
    const [loading, setLoading] = useState(false);
    const context = React.useContext(Context);
    console.log(context)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;
        console.log(userEmail, userPassword);
        console.log(credentials);
        if (userEmail) {
            setCredentials({
                email: userEmail,
                password: userPassword
            })
        }
        updateAttempts(attempts += 1);
    }

    const loginAttempt = async (credentials) => {
        const response = await fetch("https://dragonfly.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        if(data.token) {
            window.localStorage.setItem('user', JSON.stringify(data.userInfo))
            window.localStorage.setItem('token', data.token)
        }
        return data;
    }

    React.useEffect(() => {
        if (attempts > 0) {
            setLoading(true)
            loginAttempt(credentials).then(data => {
                if (data.message) {
                    setMessage("")
                    setTimeout(() => {
                        setLoading(false)
                    },3000)
                    setTimeout(() => {
                        setMessage(data.message)
                    },3000)
                } else {
                    setMessage('');
                    setTimeout(() => {
                        setLoading(false)
                    },8000)
                    context.updateUserInfo(data);
                    setTimeout(() => {
                        navigate('/welcome');
                    },3000)
                    
                }
            })
        }
    }, [credentials])

    return (
        <div className="pageWrapper">
            <div className="center">
                <Link to="/">
                    <img
                        className="signUpLogoIcon"
                        alt="Dragonfly Logo Icon Small"
                        src={iconLogo}
                    />
                </Link>
            </div>
            <div className="center">
                <div className="formContainer_LogSignIn center">
                    <h4>Log in</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="center inputFields">
                            <input type="text" id="email" name="email" placeholder="   Email" />
                            <input type="text" id="password" name="password" placeholder="   Password" />
                        </div>
                        {message && <p>{message}</p>}
                        <div className="center">
                            <button className="signUpBtn" type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="center">
                <p className="redirectText">Don't have an account? <span><Link to="/signup">Sign up</Link></span></p>
            </div>
            {loading && <Lottie options={defaultOptions} height= {48} width= {48}></Lottie>}
        </div>
    )
}

export default LogInPage