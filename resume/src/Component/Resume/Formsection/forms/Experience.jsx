import React, { useEffect, useState } from 'react';

const fieldForm = {
  title: "",
  company: "",
  startDate: "",
  endDate: "",
  responsibilities: ""
};

const Experience = () => {
  const [experienceList, setExperienceList] = useState([fieldForm]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newEntries = [...experienceList];
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, { ...fieldForm }]);
  };

  const removeExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  // useEffect(() => {
  //   console.log(experienceList);
  // }, [experienceList]);

  return (
    <div>
      {experienceList.map((item, index) => (
        <form key={index}>
          <div>
            <label>Position</label>
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={item.company}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              value={item.startDate}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={item.endDate}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
          <div>
            <label>Responsibilities</label>
            <textarea
              name="responsibilities"
              value={item.responsibilities}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
        </form>
      ))}
      <div>
        <button onClick={addNewExperience}>+ Add New Experience</button>
        <button onClick={removeExperience}>- Remove</button>
      </div>
    </div>
  );
};

export default Experience;
