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
                    id="loginbutton"
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
