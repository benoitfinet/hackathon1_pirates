import './LogIn.css';
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

function LogIn() {
    return (
        <div>
            <Link to="/"><img alt="logo" id="logo" src={logo}></img></Link>
                <div className="loginmain">
                <h1>Log In</h1>

                <form >
                <div>

                    <div className="loginform">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="pirates@hookedIn.com"
                        className="log-input"
                    />
                    </div>

                    <div className="loginform">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insert password"
                        className="log-input"
                    />
                    </div>
                    <div className="loginform">
                    <Link to="/UserProfile">
                    <input
                    type="submit"
                    value="Connect"
<<<<<<< HEAD
                    id="button"
                    className="log-input"
=======
                    id="loginbutton"
>>>>>>> 1d6b83d0d172de8dd10d5b05b835441ceb35c8eb
                    />
                    </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn
