import './LogIn.css';
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

function LogIn() {
    return (
        <div>
            <Link to="/"><img alt="logo" id="logo" src={logo}></img></Link>
                <div className="FormEmployee">
                <h1>Log In</h1>

                <form >
                <div>

                    <div className="form-data">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="pirates@hookedIn.com"
                    />
                    </div>

                    <div className="form-data">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insert password"
                    />
                    </div>
                    <div className="form-data">
                    <Link to="/Crew">
                    <input
                    type="submit"
                    value="Connect"
                    id="button"
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
