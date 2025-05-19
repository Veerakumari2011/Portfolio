import React from "react";

const Workcard = ({ imgsrc, title, text, view }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      
      {/* ✅ Ensure view button is rendered */}
      <a href={view} target="_blank" rel="noopener noreferrer" className="btn">
        View Project
      </a>
    </div>
  );
};

export default Workcard;
