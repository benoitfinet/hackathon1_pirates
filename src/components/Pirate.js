import './Pirate.css';

const Pirate = ({ offer, setDetails }) => {

  return(
    <div id="piratemain" onClick={()=> setDetails(offer)}>
      <h3>Speciality : {offer.job_name}</h3>
      <p>Last Name : {offer.user_lastname}</p>
      <p>First Name : {offer.user_firstname}</p>
      <p>Age : {offer.age}</p>
      <p>Nationality : {offer.language_name}</p>
    </div>
  );
}

export default Pirate;