import React from 'react';
import SkillsSection from './SkillsSection'; // Import the child component
import Heading from '../../../../Global/Heading';

const Skills = ({ resumeInfo }) => {
  return (
    <div>
      {resumeInfo?.skills && (
        <div>
          <Heading heading={"SKILLS"}/>
          <SkillsSection skills={resumeInfo?.skills} />
        </div>
      )}
    </div>
  );
};

export default Skills;
