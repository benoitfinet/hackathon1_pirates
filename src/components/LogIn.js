import './LogIn.css';
import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';
import { Component } from 'react';

class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email : "",
        password: "",
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
        const url = "http://localhost:8000/security/login";
    
        fetch(url, config)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.error) {
                alert(res.error);
                } else {
                alert('You are log in!');
                }
            })
            .catch((e) => {
                console.error(e);
                alert("There was an error when logging in!");
            });
    };

    render() {
        return (
            <div>
                <Link to="/"><img alt="logo" id="logo" src={logo}></img></Link>
                    <div className="loginmain">
                    <h1>Log In</h1>
                    <form onSubmit={this.submitForm}>
                    <div>
                        <div className="loginform">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="pirates@hookedIn.com"
                            className="log-input"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        </div>
                        <div className="loginform">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Insert password"
                            className="log-input"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        </div>
                        <div className="loginform">
                        <input
                        type="submit"
                        value="Send"
                        id="loginbutton"
                        />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
    }

export default LogIn
