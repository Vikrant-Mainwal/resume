import React, { useRef, useEffect, useState } from "react";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import ResumePreview from "./Resumepreview/ResumePreview";
import { ResumeInfoContext } from "../../Context/ResumeInfoContext";
import dummy from "../../dummy/dummy";
import html2pdf from 'html2pdf.js';
import FormSection from "./Formsection/FormSection";
import SubmitButton from "../Global/SubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Resume = () => {
  const [resumeInfo, setResumeInfo] = useState();
  const componentRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage
        if (!token) {
          console.log("error");
        }

        const response = await axios.get(
          "http://localhost:5000/user/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          }
        );
        setResumeInfo(response.data.data.resume);
      } catch {
        console.error("Error fetching resume:", error);
        // Handle error (e.g., navigate to login page if unauthorized)
      }
    };
    fetchResume();
  }, []);

  const handleDownloadPdf = () => {
    const input = componentRef.current;

    // Configuration options for html2pdf
    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'resume.pdf',
      image: { type: 'png', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    };

    // Temporarily remove the scaling class

    html2pdf().from(input).set(opt).save().then(() => {
      console.log("success");
    });
  };
  

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="flex flex-col">
        {/* Left Side */}
        <div className="px-4 my-4" id="no-print">
          <SecondaryNavbar />
          <hr className="my-[10px] border-gray-300" />
          <div>
            <FormSection />
          </div>
          
        </div>

        {/* Vertical Divider */}
        <hr className="w-px h-150vh bg-black" />

        {/* Right Side (Resume Preview) */}
        <div className="w-full h-full bg-gray-100 flex justify-center items-center">
          <div ref={componentRef} >
            <div className="w-[793.7px] h-[1122.5px] bg-white border border-gray-300">
              <div className="p-[40px_50px_30px_50px]">
                <ResumePreview />
              </div>
            </div>
          </div>
        </div>
        <button
            onClick={handleDownloadPdf}
            className=" w-[200px] m-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 my-4 rounded"
          >
            Download Resume
          </button>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default Resume;
