import './LogIn.css';
import logo from '../img/hooked-in-logo.png';

function LogIn() {
    return (
        <div>
            <img alt="logo" id="logo" src={logo} />
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
                    <input
                    type="submit"
                    value="Connect"
                    id="button"
                    />
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn
