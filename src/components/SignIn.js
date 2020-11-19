import React from 'react'
import './SignIn.css'
import logo from '../img/hooked-in-logo.png';

function SignIn() {
    return (
        <div>
            <img alt="logo" id="logo" src={logo} />
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
                    />
                    </div>
                    <div className="form-data">
                    <input
                        type="text"
                        id="firstname"
                        name="firsname"
                        placeholder="Jack"
                    />
                    </div>
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
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Confirm password"
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

export default SignIn
