import React, { Component } from "react";
import './SignIn.css'
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';

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
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        };
        console.log(config)
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
                <Link to="/"><img alt="logo" id="logo" src={logo}/></Link>
                <div className="signinmain">
                    <h1>Sign In</h1>
                    <form onSubmit={this.submitForm}>
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
                        <select id="role_id" name="role_id" onChange={this.onChange}>
                            <option value="1">Recruiter</option>
                            <option value="2"> Candidate </option>
                        </select>
                        </div>
                        <div className="signinform">
                        <Link to="/Crew" ><input
                        type="submit"
                        value="Send"
                        id="loginbutton"
                        /> </Link>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn;
