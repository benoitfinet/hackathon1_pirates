import "./PirateDetails.css";

const PirateDetails = ({ details }) => {
  console.log(details);
  return (
    <div className="detailsPirates">
      <img alt={details.user_firstname} src={details.url_sealer} />
      <h1>{details.user_firstname}</h1>
      <p>{details.description}</p>
    </div>
  );
}

export default PirateDetails;