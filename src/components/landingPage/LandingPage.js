//Library
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import circleBlobs from "../../imgFiles/Landing-Page-Image.svg";
import logo from '../../imgFiles/dragonfly-motion-logo-full.svg';
import "./landingPage.css";

const LandingPage = () => {
    return (
        <>  
            <div className="login-btn">
                <Button className="login-btn-text" >
                    <Link to="/login">Log In</Link>
                </Button>
            </div>
            <div className="firstPage_landingPage">
                <section className="mainHeader_landingPage">
                    <div>
                        <img
                            alt="Dragonfly Logo Motion"
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <h2>Stay on top of you job search</h2>
                        <p className='last-intro-text'>Organize, take notes, set reminders, and keep job descriptions all in one place</p>
                        <form >
                            <button className="signup-btn-text">
                            <Link to="/signup">Sign up</Link>
                            </button>
                        </form>
                    </div>
                </section>
                <div>
                    <img src={circleBlobs} alt="Demo Cards" height={600} width={600}/>
                </div>
            </div>
        </>
    )
}

export default LandingPage