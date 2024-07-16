import React, { useContext, useEffect, useState } from "react";
import InputField from "../../../Global/InputField";
import SubmitButton from "../../../Global/SubmitButton";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";
import axios from "axios";

const initialFieldForm = {
  languages: "",
  framework: "",
  cloud: "",
  databases: "",
};

const Skills = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [skills, setSkills] = useState(resumeInfo?.skills || initialFieldForm);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkills((prevSkills) => ({
      ...prevSkills,
      [name]: value,
    }));
  };

  const onSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/user/skills',
        { ...resumeInfo, skills },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log(response.data, "response");
      setResumeInfo({ ...resumeInfo, skills });
      setResponseMessage("Skills updated successfully!");
    } catch (error) {
      console.log(error);
      setResponseMessage("Error updating skills. Please try again.");
    }
  };

  useEffect(() => {
    setSkills(resumeInfo?.skills || initialFieldForm);
  }, [resumeInfo]);

  return (
    <div className="flex justify-center items-center mt-12">
      <form className="w-4/5 h-fit flex flex-col items-center justify-center font-semibold shadow-md rounded-lg gap-5" onSubmit={onSave}>
        <div className="flex flex-col items-center text-2xl">Skills</div>
        <div className="flex flex-col justify-end items-end gap-4">
          <InputField
            fieldName="Languages"
            type="text"
            name="languages"
            value={skills.languages || ""}
            onChange={handleChange}
          />
          <InputField
            fieldName="Cloud"
            type="text"
            name="cloud"
            value={skills.cloud || ""}
            onChange={handleChange}
          />
          <InputField
            fieldName="Databases"
            type="text"
            name="databases"
            value={skills.databases || ""}
            onChange={handleChange}
          />
          <InputField
            fieldName="Frameworks"
            type="text"
            name="framework"
            value={skills.framework || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <SubmitButton>Submit</SubmitButton>
        </div>
        {responseMessage && <div className="text-center text-red-500">{responseMessage}</div>}
      </form>
    </div>
  );
};

export default Skills;
