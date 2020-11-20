import './UserProfile.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function RecruiterProfile() {
    return (
        <div>
            <div className="recruitermain">
            <Link to="/"><Header /></Link>
            <h1>Welcome on Board, Captain</h1>
            <img id="profilpicrecruiter" alt="pirate" src="https://i.skyrock.net/1798/80241798/pics/3033851157_1_2_G76AS9Y1.jpg" />
            <div id="cardprofilrecruiter">
                <p>"Fifteenth and sixteenth century building with two masts, slender, generally rigged with a lateen sail. The design represents a Portuguese
                caravel"</p>
                <br></br>
                <p>Your boat : Black Pearl</p>
                <p>Your crew : 60 people</p>
                <p>Your storage : 500 alcohol, 8000 money, 500 food</p>
                <p>Your experience : 20 boats attacked</p>
                <p>Your resistance : 3 gallon a day</p>
            </div>
            <Link to="/Crew"><button id="profilebuttonrecruiter">Find a pirate</button></Link>
        </div>
        </div>
    )
}

export default RecruiterProfile
