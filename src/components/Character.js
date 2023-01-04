import React from "react";

function Character({ id, image, name, origin }) {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} alt={name} width="285" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          {origin.name !== "unknown" && (
            <p className="card-text">Origin: {origin.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Character;
