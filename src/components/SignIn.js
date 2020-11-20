import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

function SignIn() {
    return (
        <div>
            <Link to="/"><img alt="logo" id="logo" src={logo} /></Link>
            <div className="FormEmployee">
                <h1>Sign In</h1>
                <form >
                <div>
                    <div className="form-data">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Sparrow"
                        className="sign-input"
                    />
                    </div>
                    <div className="form-data">
                    <input
                        type="text"
                        id="firstname"
                        name="firsname"
                        placeholder="Jack"
                        className="sign-input"
                    />
                    </div>
                    <div className="form-data">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="pirates@hookedIn.com"
                        className="sign-input"
                    />
                    </div>
                    <div className="form-data">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insert password"
                        className="sign-input"
                    />
                    </div>
                    <div className="form-data">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Confirm password"
                        className="sign-input"
                    />
                    </div>
                    <div className="form-data">
                    <Link to="/Crew">
                    <input
                    type="submit"
                    value="Connect"
                    id="button"
                    className="sign-input"
                    />
                    </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
