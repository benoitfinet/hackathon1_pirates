import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';
import flag from '../img/Pirate_Flag.png';

import './Home.css';

function Home() {
    return (
        <div id="home">
            <img id="homelogo" alt="logo" src={logo} />
            <div>
                
                <p id="homeintro">AHOY BUCCANEER!<br></br> Please, if you already have an account, log in. If you don't, please create one</p>
            </div>
            <img id="homeflag" alt="flag" src={flag} />
            <div id="homelookingfor">
                <p><Link to="/SignIn">Sign In</Link></p>
                <p><Link to="/LogIn">Log In</Link></p> 
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
