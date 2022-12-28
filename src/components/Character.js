import React from "react";

function Character({ id, image, name, origin }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={image} alt={name} width="300" className="card-img-top'" />
        <div className="card-body">
          <h3 className="card-title">
            <b>Name: {name}</b>
          </h3>
          {origin.name !== "unknown" && <p>Origin: {origin.name}</p>}
        </div>
      </div>
    </div>
  );
}

export default Character;
