import React from "react";

import Header from "./Header";
import Pirate from "./Pirate";
import PirateDetails from "./PirateDetails";
import SelectPirate from "./SelectPirate";

import './PirateOffers.css';
import './SelectPirate.css';

const offers = [
  {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    captain: "Barbarossa",
    ship: "The Black Falcon",
    crewNumber: 12,
    infoSup: "Nous allons ici donner des infos en plus de celles que nous affichont déjà. Pour l'instant, le contenu est vide."
  },
  {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    captain: "Blackbeard",
    ship: "The Sloop Adventure",
    crewNumber: 53,
    infoSup: "Nous allons ici donner des infos en plus de celles que nous affichont déjà. Pour l'instant, le contenu est vide."
  },
  {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    captain: "Captain Kidd",
    ship: "The Quedah Merchant",
    crewNumber: 5,
    infoSup: "Nous allons ici donner des infos en plus de celles que nous affichont déjà. Pour l'instant, le contenu est vide."
  },
  {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    captain: "Henry Morgan",
    ship: "Guayaquil",
    crewNumber: 19,
    infoSup: "Nous allons ici donner des infos en plus de celles que nous affichont déjà. Pour l'instant, le contenu est vide."
  },
  {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
    captain: "Barbarossa",
    ship: "The Black Falcon",
    crewNumber: 12,
    infoSup: "Nous allons ici donner des infos en plus de celles que nous affichont déjà. Pour l'instant, le contenu est vide."
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.fr%2Fpin%2F407294360024190032%2F&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABAo",
    captain: "Blackbeard",
    ship: "The Sloop Adventure",
    crewNumber: 53
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinemablend.com%2Fnews%2F1664179%2Fhow-geoffrey-rush-feels-about-that-huge-pirates-of-the-caribbean-reveal&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABAs",
    captain: "Captain Kidd",
    ship: "The Quedah Merchant",
    crewNumber: 5
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhubpages.com%2Feducation%2FBlack-Flags-Black-Hearts-The-Truth-About-the-Caribbean-Pirates&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABA8",
    captain: "Henry Morgan",
    ship: "Guayaquil",
    crewNumber: 19
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.independent.co.uk%2Farts-entertainment%2Ffilms%2Fnews%2Fjohnny-depp-pirates-caribbean-5-trainwreck-behaviour-salazars-revenge-dead-men-tell-no-tales-a7729456.html&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABBB",
    captain: "Barbarossa",
    ship: "The Black Falcon",
    crewNumber: 12
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeekvibesnation.com%2Fpirates-of-the-caribbean-producer-isnt-sure-where-johnny-depp-lands-in-new-movie%2F&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABBG",
    captain: "Blackbeard",
    ship: "The Sloop Adventure",
    crewNumber: 53
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweheartit.com%2Fentry%2F331134373&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABBL",
    captain: "Captain Kidd",
    ship: "The Quedah Merchant",
    crewNumber: 5
  },
  {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.news18.com%2Fnews%2Fmovies%2Fdisney-is-saving-90-million-by-cutting-out-johnny-depp-from-the-sixth-pirates-of-the-caribbean-film-1990803.html&psig=AOvVaw1Frp3cYPtFJxvvfYJpgDdS&ust=1605894150641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjh-oeUj-0CFQAAAAAdAAAAABBQ",
    captain: "Henry Morgan",
    ship: "Guayaquil",
    crewNumber: 19
  } 
]

class PirateOffers extends React.Component {

  state= {
    details: {}
  }

  setDetails = (details) => {
    this.setState({details: details})
  }

  render() {
    return (
      <div>
        <Header />  
        <SelectPirate />
        <div className="flex">
          <div> 
            {offers.map((offer) => {
              return <Pirate offer={offer} setDetails={this.setDetails}/> 
            })}
          </div>
          <div>
            {this.state.details && <PirateDetails details={this.state.details} />}
          </div>
        </div>
      </div>
    );
  }
}

export default PirateOffers; 

