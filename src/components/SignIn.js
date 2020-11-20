import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

function SignIn() {
    return (
        <div>
            <Link to="/"><img alt="logo" id="logo" src={logo} /></Link>
            <div className="signinmain">
                <h1>Sign In</h1>
                <form >
                <div>
                    <div className="signinform">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Sparrow"
                    />
                    </div>
                    <div className="signinform">
                    <input
                        type="text"
                        id="firstname"
                        name="firsname"
                        placeholder="Jack"
                    />
                    </div>
                    <div className="signinform">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="pirates@hookedIn.com"
                    />
                    </div>
                    <div className="signinform">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insert password"
                    />
                    </div>
                    <div className="signinform">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Confirm password"
                    />
                    </div>
                    <div className="signinform">
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

export default SignIn
