import "./ApplyDetails.css";

const ApplyDetails = ({ rdetails }) => {
  console.log(rdetails);
  return (
    <div className="detailsApply">
      <img alt={rdetails.name} src={rdetails.url_boat} />
      <h1>{rdetails.name}</h1>
      <p>{rdetails.description}</p>
    </div>
  );
}

export default ApplyDetails;