import {Link} from "react-router-dom";
import iconLogo from "../../imgFiles/Dragonfly-Logo-Icon-Small.svg"
const LogInPage = () => {

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
                            <input type="text" id="email" name="Email" placeholder="   Email"/>
                            <input type="text" id="password" name="Password" placeholder="   Password"/>
                        </div>
                    </form>
                    <div className="center">
                        <button className="signUpBtn">Log in</button>
                    </div>
                </div>
            </div>
            <div className="center">
                <p className="redirectText">Don't have an account? <span><Link to="/signup">Sign up</Link></span></p>
            </div>
        </div>
    )
}

export default LogInPage