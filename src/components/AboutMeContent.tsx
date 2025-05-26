"use client";
import React, { useState } from "react";
import { PiTerminalFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { RiGamepadFill } from "react-icons/ri";
import ProfessionalMenu from "./sub-menus/ProfessionalMenu";

interface TabsProps {
  activeTab: number;
  handleTabSwitch: Function;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, handleTabSwitch }) => {
  const menuItems = [
    {
      id: 1,
      name: "Professional Information",
      icon: <PiTerminalFill size={24} />,
    },
    { id: 2, name: "Personal Information", icon: <RiContactsFill size={24} /> },
    { id: 3, name: "Hobbies Information", icon: <RiGamepadFill size={24} /> },
  ];

  return (
    <div className="flex flex-col items-center border-r border-[#314158] h-full gap-8 p-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`${activeTab === item.id ? "text-white" : "text-[#314158]"}`}
          onClick={() => handleTabSwitch(item.id)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

const AboutMeContent = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabSwitch = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="flex w-full h-[calc(100vh-150px)] max-h-full">
      <div className="w-full max-w-[250px] border-r border-[#314158] flex h-full">
        <Tabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
        <ProfessionalMenu />
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default AboutMeContent;
