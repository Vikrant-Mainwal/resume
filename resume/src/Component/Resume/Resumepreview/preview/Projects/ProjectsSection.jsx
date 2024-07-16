import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <div className="">
      {projects.map((pro, index) => (
        <div className="" key={index}>
          <div className="">
            <div className="flex justify-between">
              <p className="font-semibold">•{pro.name}</p>
              <p>{pro.year} </p>
            </div>
            <p>{pro.description1}</p>
          </div>
          <p>Tools & technologies used: {pro.technologies}</p>
          <p>{pro.description} </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
