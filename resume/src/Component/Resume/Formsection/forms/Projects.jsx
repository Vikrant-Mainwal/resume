import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";
import SubmitButton from "../../../Global/SubmitButton";
import InputField from "../../../Global/InputField";
import TextArea from "../../../Global/TextArea";
import RemoveButton from "../../../Global/RemoveButton";
import AddButton from "../../../Global/AddButton";

const fieldForm = {
  name: "",
  description1: "",
  description: "",
  technologies: "",
  year: "",
};

const Projects = () => {
  const [projectList, setProjectList] = useState([fieldForm]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newEntries = [...projectList];
    newEntries[index][name] = value;
    setProjectList(newEntries);
  };

  const addNewProject = () => {
    setProjectList([...projectList, { ...fieldForm }]);
  };

  const removeProject = () => {
    setProjectList(projectList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, projects: projectList });
  }, [projectList]);

  return (
    <div className=" flex justify-center items-center mt-[50px] ">
      <div className="w-[80%] h-fit flex flex-col items-center justify-center font-[600] shadow-md rounded-lg">
        <div className="flex flex-col items-center p-[10px] text-[23px]">
          Projects
        </div>
        <div className="flex flex-col items-end justify-end ">
          {projectList.map((item, index) => (
            <form key={index} className="flex flex-col justify-end items-end gap-[10px] mt-[50px]">
              <div>
                <InputField
                  fieldName="Name"
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div>
                <InputField
                  fieldName="Short Description"
                  type="text"
                  name="description1"
                  value={item.description1}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div>
                <TextArea
                  fieldName="Description"
                  type={"text"}
                  value={item.description}
                  name="description"
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div>
                <InputField
                  fieldName="Tools and Technology"
                  type="text"
                  name="technologies"
                  value={item.technologies}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div>
                <InputField
                fieldName="Year"
                type={"date"}
                className={"pr-[50px]"}
                name="year"
                value={item.year}
                onChange={(event) => handleChange(event, index)}
                />
              </div>
            </form>
          ))}
        </div>
        <div className="flex justify-between m-[20px] w-full px-[20px]">
        <div className="flex gap-[10px]">
          <AddButton onClick={addNewProject}>+ Add New Project</AddButton>
          <RemoveButton onClick={removeProject}>- Remove</RemoveButton>
        </div>
        <div>
          <SubmitButton type="submit">Submit</SubmitButton>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
