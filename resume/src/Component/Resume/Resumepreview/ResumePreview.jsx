import React, { useContext } from "react";
import { ResumeInfoContext } from "../../../Context/ResumeInfoContext";
import PersonalDetail from "./preview/PersonalDetail";
import Education from "./preview/Education/Education";
import Experience from "./preview/Experience/Experience";
import Skills from "./preview/Skills/Skills";
import POR from "./preview/POR/POR";
import Projects from "./preview/Projects/Projects";
import Interest from "./preview/Interest/Interest";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="">
      {/* Personal Information */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Education */}
      <Education resumeInfo={resumeInfo} />
      {/* Experience */}
      <Experience resumeInfo={resumeInfo} />
      {/* Projects */}
      <Projects resumeInfo={resumeInfo} />
      {/* Skills */}
      <Skills resumeInfo={resumeInfo} />
      {/* Area of Interest */}
      <Interest resumeInfo={resumeInfo} />
      {/* POR */}
      <POR resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
