import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Context from '../../context/context';
import iconLogo from "../../imgFiles/Dragonfly-Logo-Icon-Small.svg";
import email_white_24dp from '../../imgFiles/email_white_24dp.svg';
import person_outline from '../../imgFiles/person_outline_white_24dp.svg';
import people_outline from '../../imgFiles/people_white_24dp.svg';
// import "./signUpPage.css";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const context = React.useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userFirstName = event.target.fName.value;
        const userLastName = event.target.lName.value;
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;
        console.log(userFirstName, userLastName, userEmail, userPassword);
        console.log(userInfo);
        setUserInfo({
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            password: userPassword,
            industry: 'none'
        })
    }

    const createNewUser = async (userData) => {
        const response = await fetch("https://dragonfly.herokuapp.com/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json()
        return data;
    }

    React.useEffect(() => {
        createNewUser(userInfo).then(data => {
            console.log(data);
            context.updateUserInfo(data)


            if ('newUser' in data) {
                navigate('/login');
            }
        })
    }, [userInfo])
    // console.log(context.userInfo
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
                    <h4>Sign up for free</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="center inputFields">
                            <input type="text" id="fname" className="loginName" name="fName" placeholder="First Name" />
                            <input type="text" id="lname" className="loginLname" name="lName" placeholder="Last Name" />
                            <input type="text" id="email" className="loginEmail" name="email" placeholder="Email" />
                            <input type="text" id="password" className="loginPswd" name="password" placeholder="Password" />
                        </div>
                        <div>
                            <p>Password must contain</p>
                            <ul className="row">
                                <li className="bPoint">8 - 20 characters</li>
                                <li className="bPoint">1 or more numbers</li>
                            </ul>
                            <ul className="row">
                                <li>upper-case letter</li>
                                <li>lower-case letter</li>
                            </ul>
                            <div className="center">
                                <button className="signUpBtn" type="submit">Sign up for free</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="center">
                <p className="redirectText">Already have an account? <span><Link to="/login">Log in</Link></span></p>
            </div>
        </div>
    )
}

export default SignUpPage