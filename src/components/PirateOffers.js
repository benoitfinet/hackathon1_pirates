import React from "react";
<<<<<<< HEAD
import axios from "react";

=======
import axios from 'axios';
>>>>>>> 1d6b83d0d172de8dd10d5b05b835441ceb35c8eb
import Header from "./Header";
import Pirate from "./Pirate";
import PirateDetails from "./PirateDetails";
import { Link } from 'react-router-dom';
import SelectPirate from "./SelectPirate";

class PirateOffers extends React.Component {

  state= {
    details: [0]
  }

  setDetails = (details) => {
    this.setState({details: details})
  }

<<<<<<< HEAD
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch('http://localhost:8000/candidate/index')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ details : data[0] })
    })
  }
=======
  componentDidMount() { 
    axios.get('http://localhost:8000/candidate/index')
        .then(res => {
            this.setState({ details: res.data });
    });
}
>>>>>>> 1d6b83d0d172de8dd10d5b05b835441ceb35c8eb

  render() {
    return (
      <div>
        <Link to="/"><Header /></Link>
        <SelectPirate />
      <div>
        <div>
        <div>{this.state.details && <PirateDetails details={this.state.details} />}</div>
          {this.state.details.map((offer) => {
            return <Pirate offer={offer} setDetails={this.setDetails} />
          })}
          </div>
      </div>
      </div>
    );
  }
}

export default PirateOffers; 