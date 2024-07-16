import React from "react";

const EducationSection = ({ education }) => {
  return (
    <div>
      {education && education.length > 0 ? (
        education.map((edu, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div>
              <p className="font-semibold">•{edu.institution}</p>
              <p className="mx-[4px]">{edu.course} in {edu.degree}</p>
            </div>
            <div className="flex flex-col items-end">
              <p>{edu.graduationDate}</p>
              <p>{edu.cpi}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No education data available</p>
      )}
    </div>
  );
};

export default EducationSection;
