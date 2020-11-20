import React from "react";
import axios from 'axios';
import Header from "./Header";
import Apply from "./Apply";
import ApplyDetails from "./ApplyDetails";
import { Link } from 'react-router-dom';
import SelectApply from "./SelectApply";

class PirateOffers extends React.Component {

  state= {
    rdetails: [0]
  }

  setrDetails = (rdetails) => {
    this.setState({rdetails: rdetails})
  }

  componentDidMount() { 
    axios.get('http://localhost:8000/recruiter/index')
        .then(res => {
            this.setState({ rdetails: res.data });
    });
}

  render() {
    return (
      <div>
        <Link to="/"><Header /></Link>
        <SelectApply />
      <div>
        <div>
        <div>{this.state.rdetails && <ApplyDetails rdetails={this.state.rdetails} />}</div>
          {this.state.rdetails.map((roffer) => {
            return <Apply roffer={roffer} setrDetails={this.setrDetails} />
          })}
          </div>
      </div>
      </div>
    );
  }
}

export default PirateOffers; 