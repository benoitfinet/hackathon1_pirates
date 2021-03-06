import './UserProfile.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function UserProfile({ offer }) {
    return (
        <div className="usermain">
            <Link to="/"><Header /></Link>
            <h1>Welcome on Board, Sailor</h1>
            <img id="profilpic" alt="pirate" src="https://i.pinimg.com/originals/6f/e4/c8/6fe4c8e73919c5836b72894cd8b1a407.jpg" />
            <div id="cardprofil">
                <p>Your description : "Mainly active in the Caribbean, he served under Howell Davis and then under Bartholomew Roberts. Will be assassinated
                     in his hammock with his quartermaster during a mutiny."</p>
                <br></br>
                <p>Your area : Caraibe</p>
                <p>Your job : Gunner</p>
                <p>Your language : French</p>
                <p>Your experience : 5 years, 8 boats attacked</p>
                <p>Your resistance : 3 gallon a day</p>
            </div>
            <Link to="/Apply"><button id="profilebutton">Find a job</button></Link>
        </div>
    )
}

export default UserProfile
