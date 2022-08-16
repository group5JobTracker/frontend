import "./signUpPage.css";
import {Link} from "react-router-dom";
import iconLogo from "../../imgFiles/Dragonfly-Logo-Icon-Small.svg"
const SignUpPage = () => {

    return (
        <div className="pageWrapper">
            <div className="center">
                <Link to="/">
                <img
                    className="signUpLogoIcon"
                    alt = "Dragonfly Logo Icon Small"
                    src={iconLogo}
                />
                </Link>
            </div>
            <div className="center">
                <div className="formContainer center">
                    <h4>Sign up for free</h4>
                    <form>
                        <div className="center inputFields">
                            <input type="text" id="fname" name="First Name" placeholder="   First Name"/>
                            <input type="text" id="lname" name="Last Name" placeholder="   Last Name"/>
                            <input type="text" id="email" name="Email" placeholder="   Email"/>
                            <input type="text" id="password" name="Password" placeholder="   Password"/>
                        </div>
                    </form>
                    <div>
                        <p>Password must contain</p>
                        <ul className="row">
                            <li>8 - 20 characters</li>
                            <li>1 or more numbers</li>
                        </ul>
                        <ul className="row">
                            <li>upper-case letter</li>
                            <li>lower-case letter</li>
                        </ul>
                        <div className="center">
                            <button className="signUpBtn">Sign up for free</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <p className="redirectText">Already have an account? <span><Link to="/login">Log in</Link></span></p>
            </div>
        </div>
    )
}

export default SignUpPage