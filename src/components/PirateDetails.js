import "./PirateDetails.css";

const PirateDetails = ({ details }) => {
  return (
    <div className="detailsPirates">
      <img src={details.image} />
      <h1>{details.captain}</h1>
      <p>{details.infoSup}</p>

    </div>
  );
}

export default PirateDetails;