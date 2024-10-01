import React from "react";

const Feature = ({ imgSrc, title, description }) => {
  const imgAlt = imgSrc.replace(/-/g, " ");

  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
