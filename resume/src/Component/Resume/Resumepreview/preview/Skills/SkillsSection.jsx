import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div>
      {Object.entries(skills)
        .filter(([key]) => key !== "_id") //filter the key is not Id
        .map(([key, value]) => {
          return (
            <div key={key}>
              {value && (
                <div>
                  <span style={{ fontWeight: "700" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>{" "}
                  {value}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SkillsSection;
