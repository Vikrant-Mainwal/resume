import React from 'react';
import EducationSection from './EducationSection';
import Heading from '../../../../Global/Heading';

const Education = ({ resumeInfo }) => {
  // console.log(resumeInfo?.education); // Log to verify the structure of education

  return (
    <div className="">
     <Heading heading={"Education"}/>
      
      <EducationSection education={resumeInfo?.education} />
    </div>
  );
};

export default Education;
