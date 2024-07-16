import React from 'react';
import ExperienceSection from './ExperienceSection';
import Heading from '../../../../Global/Heading';

const Experience = ({ resumeInfo }) => {
  return (
    <div>
      {resumeInfo?.experience && resumeInfo.experience.length > 0 ? (
        <div>
          <Heading heading={"EXPERIENCE"}/>
          <ExperienceSection experience={resumeInfo.experience} />
        </div>
      ) : ("")}
    </div>
  );
};

export default Experience;
