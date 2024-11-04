import React from "react";
import { Link } from "react-router-dom";

const card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.type}</p>
        <Link to={`/pokemon/${props.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};
export default card;
