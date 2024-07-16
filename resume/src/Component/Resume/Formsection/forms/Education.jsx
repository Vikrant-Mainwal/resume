import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";
import SubmitButton from "../../../Global/SubmitButton";
import InputField from "../../../Global/InputField";
import RemoveButton from "../../../Global/RemoveButton";
import AddButton from "../../../Global/AddButton";

const fieldForm = {
  institution: "",
  course: "",
  degree: "",
  cpi: "",
  graduationDate: "",
};

const Education = () => {
  const [educationList, setEducationList] = useState([fieldForm]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newEntries = [...educationList];
    newEntries[index][name] = value;
    setEducationList(newEntries);
    setResumeInfo({ ...resumeInfo, education: educationList })
  };

  const addNewEducation = () => {
    setEducationList([...educationList, { ...fieldForm }]);
  };

  const removeEducation = () => {
    setEducationList(educationList.slice(0, -1));
  };

  const onSave = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/user/profile', resumeInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Assuming response.data updates resumeInfo with server response
      setResponseMessage('Form submitted successfully');
      setResumeInfo({ ...resumeInfo, education: educationList });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error submitting form');
    }
  };
  

  useEffect(() => {
    // Fetch resumeInfo from context or any other source
    setEducationList(resumeInfo?.education || [fieldForm]);
  }, [resumeInfo]);
  

  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="w-[80%] h-fit flex flex-col items-center justify-center font-[600] shadow-md rounded-lg">
        <div className="flex flex-col items-center p-[10px] text-[23px]">
          Education
        </div>
        <form className="flex flex-col items-end justify-end w-full m-auto" onSubmit={onSave}>
          {educationList.map((item, index) => (
            <div key={index} className="flex flex-col justify-end items-end gap-[10px] mt-[50px] w-full px-[20px]">
              <InputField
                fieldName="Institution"
                type="text"
                name="institution"
                value={item.institution}
                onChange={(event) => handleChange(event, index)}
              />
              <InputField
                fieldName="Course"
                type="text"
                name="course"
                value={item.course}
                onChange={(event) => handleChange(event, index)}
              />
              <InputField
                fieldName="Degree"
                type="text"
                name="degree"
                value={item.degree}
                onChange={(event) => handleChange(event, index)}
              />
              <InputField
                fieldName="CPI"
                type="number"
                name="cpi"
                value={item.cpi}
                onChange={(event) => handleChange(event, index)}
              />
              <InputField
                fieldName="Graduation Date"
                type="year"
                name="graduationDate"
                value={item.graduationDate}
                onChange={(event) => handleChange(event, index)}
              />
            </div>
          ))}
          <div className="flex justify-between m-[20px] w-full px-[20px]">
            <div className="flex gap-[10px]">
              <AddButton type="button" onClick={addNewEducation}>+ Add New Education</AddButton>
              <RemoveButton type="button" onClick={removeEducation}>- Remove</RemoveButton>
            </div>
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
        </form>
        {responseMessage && <div className="text-center text-red-500">{responseMessage}</div>}
      </div>
    </div>
  );
};

export default Education;
