//Library
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import circleBlobs from "../../imgFiles/Cards-Image.png";
import logo from '../../imgFiles/dragonfly-motion-logo-full.svg';
// import "./landingPage.css";

const LandingPage = () => {
    return (
        <div className='landingPg'>
            <div className='wrapper'>
                <div className="login-btn">
                    <Button className="login-btn-text" >
                        <Link to="/login"><span>Log In</span></Link>
                    </Button>

                </div>
                <div className="firstPage_landingPage">
                    <section className="mainHeader_landingPage">
                        <div className='logoContainer'>
                            <img
                                alt="Dragonfly Logo Motion"
                                src={logo}
                                height="30"
                                className="d-inline-block align-top motionLogo"
                            />
                        </div>
                        <div className='headerTextContainer'>
                            <h2>Stay on top of your job search</h2>
                            <p className='last-intro-text'>Organize, take notes, set reminders, and keep job descriptions all in one place</p>

                        </div>
                        <div className='loginBtnContainer'>
                            <form >
                                <button className="signup-btn-text">
                                    <Link to="/signup"><span>Sign up</span></Link>
                                </button>
                            </form>
                        </div>
                    </section>
                    <div>
                        <img src={circleBlobs} alt="Demo Cards" height={600} width={600} />
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default LandingPage