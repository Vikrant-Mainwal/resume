import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SecondaryNavbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const tabs = [
        {
            tab: "Profile",
            path: "/profile"
        },
        {
            tab: "Education",
            path: "/education"
        },
        {
            tab: "Experience",
            path: "/experience"
        },
        {
            tab: "Projects",
            path: "/projects"
        },
        {
            tab: "Skills",
            path: "/skills"
        },
        {
            tab: "POR",
            path: "/por"
        },
        {
            tab: "Achievement",
            path: "/achievement"
        },
        {
            tab: "Hobbies",
            path: "/hobbies"
        },
        {
            tab: "Area of Interest",
            path: "/interest"
        },
       
    ];

    return (
        <div className="sm:mb-[32px] mb-[20px] h-[40px] overflow-hidden">
        <div className="flex items-end border-b-[1px] border-[#00000014] sm:gap-[32px] gap-[8px] overflow-x-scroll">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`!min-w-[fit-content] cursor-pointer text-[14px] font-[400] p-[12px_8px] flex justify-center items-center rounded-t-md h-[44px] ${pathname.startsWith(tab.path) ? "font-[600] text-[#4B369D] underline bg-[#fff] border-b-[2px] border-[#4B369D]" : "text-[#00000099]"}`}
                    onClick={() => navigate(tab.path)}
                >
                    {tab.tab}
                </div>
            ))}
        </div>
    </div>
    );
};

export default SecondaryNavbar;
