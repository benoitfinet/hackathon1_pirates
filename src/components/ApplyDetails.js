import "./ApplyDetails.css";

const ApplyDetails = ({ rdetails }) => {
  return (
    <div className="detailsApply">
      <img alt={rdetails.name} src={rdetails.url_boat} />
      <h1>{rdetails.name}</h1>
      <h2>{rdetails.firstname} {rdetails.lastname}</h2>
      <p>{rdetails.description}</p>
    </div>
  );
}

export default ApplyDetails;