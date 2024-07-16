import React, { useRef, useEffect, useState } from 'react'
import SecondaryNavbar from '../Navbar/SecondaryNavbar'
import ResumePreview from './Resumepreview/ResumePreview'
import { ResumeInfoContext } from '../../Context/ResumeInfoContext'
import dummy from '../../dummy/dummy'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import FormSection from './Formsection/FormSection'

const Resume = () => {
    const [resumeInfo, setResumeInfo] = useState()
    const componentRef = useRef()

    useEffect(() => {
        setResumeInfo(dummy)
    }, [])

    const handleDownloadPdf = () => {
        const input = componentRef.current
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png')
                const pdf = new jsPDF()
                pdf.addImage(imgData, 'PNG', 0, 0)
                pdf.save("resume.pdf")
            })
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className='flex'>
                <div className="w-[50%] ">
                    <SecondaryNavbar handleDownloadPdf={handleDownloadPdf}/>
                    <div>
                        <FormSection/>
                    </div>
                    
                </div>
                <hr className='w-[1px] h-[150vh] bg-black' />
                <div className="w-[50%]" ref={componentRef}>
                    <ResumePreview />
                </div>
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default Resume
