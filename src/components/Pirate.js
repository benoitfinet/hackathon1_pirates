const Pirate = ({ offer, setDetails }) => {

  return(
    <div className="color" onClick={()=> setDetails(offer)}>
      <h3>Captain : {offer.captain}</h3>
      <p>Ship : {offer.ship}</p>
      <p>Crew number : {offer.crewNumber}</p>
      <br/>
    </div>
  );
}

export default Pirate;