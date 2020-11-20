import React from "react";
import axios from 'axios';
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

  componentDidMount() { 
    axios.get('http://localhost:8000/candidate/index')
        .then(res => {
            this.setState({ details: res.data });
    });
}

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