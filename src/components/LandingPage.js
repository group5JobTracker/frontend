//Library
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const LandingPage = () => {
    return (
        <>
            <div className="firstPage_landingPage">
                <section className="topHeader_lAndingPage">
                    <h1>Dragonfly</h1>
                </section>
                <Link to="/dashboard">
                    <button>Log in</button>
                </Link>

                <section className="mainHeader_landingPage">
                    <div>
                        <h2>Stay on top of you job search</h2>
                        <p>Organize, take notes, set reminders, and keep job descriptions all in one place</p>
                        <form >
                            <button>Sign up</button>
                        </form>
                    </div>
                    <div>
                        <div className='circles'>
                            <span className='cir-blue'></span>
                            <span className='cir-gren'></span>
                            <span className='cir-purple'></span>
                            <span className='cir-pink'></span>
                            <span className='cir-red'></span>
                        </div>
                        <div className='cardsExamples'>
                            <div className='first-card'></div>
                            <div className='second-card'></div>
                            <div className='third-card'></div>
                        </div>
                    </div>
                </section>
                <div className="arrowButtom">
                    <span className='arrow1'></span>
                    <span className='arrow2'></span>
                    <span className='arrow3'></span>
                </div>
            </div>

            <div className="secondPage_landingPage">

                <div className='lateralBars'>
                    <span className='LatBar-blue'></span>
                    <span className='LatBar-gren'></span>
                    <span className='LatBar-purple'></span>
                    <span className='LatBar-pink'></span>
                    <span className='LatBar-red'></span>
                </div>

                <div>
                    <h2>Increase your efficiency</h2>
                    <p>Use an extension to automatically add job descriptions to your dashboard</p>
                    <button>Download Extension</button>

                </div>

            </div>

        </>
    )
}

export default LandingPage