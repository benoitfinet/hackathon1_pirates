import './Apply.css';

const Apply = ({ roffer, setrDetails }) => {

  return(
    <div id="Applymain" onClick={()=> setrDetails(roffer)}>
      <h3>Name of the boat : {roffer.name}</h3>
      <p>Crew size : {roffer.nb_team}</p>
      <p>Alcohol on board : {roffer.qty_alcohol}</p>
      <p>Food on board : {roffer.qty_food}</p>
      <p>State : {roffer.state}</p>
    </div>
  );
}

export default Apply;