import { Link } from 'react-router-dom';
import logo from '../img/hookedin-logo-header.png';
import flag from '../img/Pirate_Flag.png';

import './Home.css';

function Home() {
    return (
        <div id="home">
            <img id="logo" alt="logo" src={logo} />
            <div>
                <img id="flag" alt="flag" src={flag} />
                <p id="intro">AHOY BUCCANEER!<br></br> PLEASE TELL US WHAT KIND OF PIRATE YOU ARE</p>
            </div>
            <div id="lookingfor">
                <Link to="/crew">LOOKING FOR A CREW</Link> 
                <p>LOOKING FOR A mate</p> 
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
