import './Home.css';
import logo from '../img/hooked-in-logo.png';
import flag from '../img/Pirate_Flag.png';

function Home() {
    return (
        <div id="home">
            <img id="logo" alt="logo" src={logo} />
            <div>
                <img id="flag" alt="flag" src={flag} />
                <p id="intro">AHOY BUCCANEER!<br></br> PLEASE TELL US WHAT KIND OF PIRATE YOU ARE</p>
            </div>
            <div id="lookingfor">
                <p>LOOKING FOR A CREW</p>
                <p>LOOKING FOR A MATE</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
