import "./Projectcards.css"; // Ensure file exists and matches the name exactly
import React from "react";
import Workcard from "./Workcard";
import ProjectData from "./Data";

const Projectcards = () => {
  return (
    
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectData.map((project, index) => (
          <Workcard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title} // Fixed typo
            text={project.text}
            view={project.view}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Projectcards;

