import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";
import InputField from "../../../Global/InputField";
import SubmitButton from "../../../Global/SubmitButton";

const Profile = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/user/profile",
        resumeInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage("Form submitted successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error submitting form");
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <form
        className="flex items-center justify-end flex-col gap-4"
        onSubmit={onSave}
      >
        <div className="flex flex-col gap-4 justify-end">
          <div className="flex justify-between">
            <InputField
              fieldName="Name"
              name="name"
              type="text"
              value={resumeInfo?.name || ""}
              onChange={handleInputChange}
            />
            <InputField
              fieldName="Roll No."
              name="enrollment"
              type="text"
              value={resumeInfo?.enrollment || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <InputField
              fieldName="Course"
              name="course"
              type="text"
              value={resumeInfo?.course || ""}
              onChange={handleInputChange}
            />

            <InputField
              fieldName="Branch"
              name="branch"
              type="text"
              value={resumeInfo?.branch || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <InputField
              fieldName="Phone No."
              type="text"
              name="phone"
              value={resumeInfo?.phone || ""}
              onChange={handleInputChange}
            />

            <InputField
              fieldName="Email"
              type="email"
              name="email"
              value={resumeInfo?.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <InputField
              fieldName="College Email"
              type="email"
              name="collegeemail"
              value={resumeInfo?.collegeemail || ""}
              onChange={handleInputChange}
            />

            <InputField
              fieldName="Linkedin"
              type="text"
              name="linkedin"
              value={resumeInfo?.linkedin || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <InputField
              fieldName="Github"
              type="text"
              name="github"
              value={resumeInfo?.github || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
};

export default Profile;
