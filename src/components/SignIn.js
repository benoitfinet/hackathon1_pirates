import React, { Component } from "react";
import './SignIn.css'
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

<<<<<<< HEAD
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
=======
class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: "",
        lastname: "",
        email : "",
        password: "",
        password2: "",
        role_id: ""
      };
    }
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    
    submitForm = (e) => {
        e.preventDefault();
        const config = {
          method: "POST",
        };
        const url = "http://localhost:8000/security/register";
        fetch(url, config)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                alert(res.error);
                } else {
                alert('Account has been successfully created!');
                }
            })
            .catch((e) => {
                console.error(e);
                alert("There was an error when creating the account.");
            });
    };

    render () {
        return (
            <div>
                <Link to="/"><img alt="logo" id="logo" src={logo} /></Link>
                <div className="signinmain">
                    <h1>Sign In</h1>
                    <form onSubmit={this.submitForm} method="POST">
                    <div>
                        <div className="signinform">
                        <input
                            type="text"
                            id="name"
                            name="firstname"
                            placeholder="Sparrow"
                            onChange={this.onChange}
                            value={this.state.firstname}
                        />
                        </div>
                        <div className="signinform">
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Jack"
                            onChange={this.onChange}
                            value={this.state.lastname}
                        />
                        </div>
                        <div className="signinform">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="pirates@hookedIn.com"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        </div>
                        <div className="signinform">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Insert password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        </div>
                        <div className="signinform">
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            placeholder="Confirm password"
                            onChange={this.onChange}
                            value={this.state.password2}
                        />
                        </div>
                        <div className="signinform">
                        <select id="role_id" name="role_id">
                            <option value="1">Recruiter</option>
                            <option value="2"> Candidate </option>
                        </select>
                        </div>
                        <div className="signinform">
                        <input
                        type="submit"
                        value="Send"
                        id="buttonSign"
                        />
                        </div>
>>>>>>> 1d6b83d0d172de8dd10d5b05b835441ceb35c8eb
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn;
