//Library
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const LandingPage = () => {
    const handleLogIn = () => {

    }

    return (
        <>
            <section>
                <h1>Dragonfly</h1>
                {/* <form>
                    <button>Log in</button>
                </form> */}
                <Link to="/dashboard">Log In</Link>

            </section>

            <section>
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
                </div>
            </section>

            <section>
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
                <div>
                    <h2>Increase your efficiency</h2>
                    <p>Use an extension to automatically add job descriptions to your dashboard</p>
                    <form >
                        <button>Download Extension</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default LandingPage