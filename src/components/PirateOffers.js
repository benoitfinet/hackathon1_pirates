import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from "./Header";
import Apply from "./Apply";
import ApplyDetails from "./ApplyDetails";
import SelectApply from "./SelectApply";

import "./ApplyOffers.css";

class PirateOffers extends React.Component {

  state= {
    rdetailsArray: [0],
    rdetails: {}
  }

  setrDetails = (rdetails) => {
    this.setState({rdetails: rdetails})
  }

  componentDidMount() { 
    axios.get('http://localhost:8000/recruiter/index')
        .then(res => {
            this.setState({ rdetailsArray: res.data });
    });
}

  render() {
    console.log(this.state.rdetails);
    return (
      <div>
        <Link to="/"><Header /></Link>
        <SelectApply />
        <div className="cardStyle">
          <div>          
            {this.state.rdetailsArray.map((roffer) => {
              return <Apply roffer={roffer} setrDetails={this.setrDetails} />
            })}
          </div>
          <div>{this.state.rdetails && <ApplyDetails rdetails={this.state.rdetails} />}</div>
        </div>
      </div>
    );
  }
}

export default PirateOffers; 