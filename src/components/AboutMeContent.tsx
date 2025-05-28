"use client";
import React, { useState } from "react";
import { PiTerminalFill } from "react-icons/pi";
import { RiContactsFill, RiGamepadFill } from "react-icons/ri";
import ProfessionalMenu from "./sub-menus/ProfessionalMenu";
import { ProfessionalSubMenuList } from "./sub-menus/ProfessionalMenu";
import { RxCross2 } from "react-icons/rx";
import ExperienceContent from "./professional-content/ExperienceContent";

interface TabsProps {
  activeTab: number;
  handleTabSwitch: (id: number) => void;
}

interface MenuItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, handleTabSwitch }) => {
  const menuItems: MenuItem[] = [
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
          className={`${activeTab === item.id ? "text-white" : "text-[#b4c8db]"} cursor-pointer`}
          onClick={() => handleTabSwitch(item.id)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

const AboutMeContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [subMenuOpen, setSubMenuOpen] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });
  const [professionalSubOpen, setProfessionalSubOpen] = useState<
    Record<number, boolean>
  >({
    1: true,
  });

  const handleSubMenu = (id: number): void => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleProfessionalSubMenu = (id: number): void => {
    setProfessionalSubOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTabSwitch = (id: number): void => {
    setActiveTab(id);
  };

  const getItemTitle = (id: number): string | undefined => {
    return ProfessionalSubMenuList.find((item) => item.id === id)?.title;
  };

  return (
    <div className="flex w-full h-[calc(100vh-150px)] max-h-full">
      <div className="w-full max-w-[275px] border-r border-[#314158] flex h-full overflow-clip">
        <Tabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
        <ProfessionalMenu
          menuOpen={subMenuOpen}
          handleSubMenu={handleSubMenu}
          professionalSubOpen={professionalSubOpen}
          handleProfessionalSubMenu={handleProfessionalSubMenu}
        />
      </div>
      <div className="w-full flex">
        <div className="flex flex-col w-full max-w-[50%] border-r border-[#314158]">
          <div className="w-full h-10 border-b border-[#314158] flex text-[#b4c8db] overflow-scroll scrollbar-hidden">
            {Object.entries(professionalSubOpen).map(
              (item) =>
                item[1] && (
                  <div
                    key={item[0]}
                    className="w-full max-w-fit flex justify-between items-center text-center h-full px-2 gap-8 border-r border-[#314158] text-nowrap cursor-pointer"
                  >
                    <span className="">{getItemTitle(parseInt(item[0]))}</span>
                    <RxCross2
                      className="pt-0.5"
                      size={20}
                      onClick={() =>
                        handleProfessionalSubMenu(parseInt(item[0]))
                      }
                    />
                  </div>
                )
            )}
          </div>
          <ExperienceContent/>
        </div>
        <div className="flex flex-col w-full max-w-[50%]">
          <div className="w-full h-10 border-b border-[#314158]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
