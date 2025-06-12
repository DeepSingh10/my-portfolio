"use client";
import React, { useState } from "react";
import { PiTerminalFill } from "react-icons/pi";
import { RiContactsFill, RiGamepadFill } from "react-icons/ri";
import ProfessionalMenu from "./sub-menus/ProfessionalMenu";
import { ProfessionalSubMenuList } from "./sub-menus/ProfessionalMenu";
import ProfessionalContent from "./professional-content/ProfessionalContent";
import PersonelMenu from "./sub-menus/PersonelMenu";
import HobbiesMenu from "./sub-menus/HobbiesMenu";

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
  const [activeProfessionalContent, setActiveProfessionalContent] =
    useState<number>(1);
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
  const handleProfessionalSubMenu = (id: number, flag: boolean): void => {
    setProfessionalSubOpen((prev) => ({
      ...prev,
      [id]: flag ? !prev[id] : true,
    }));
  };

  const handleTabSwitch = (id: number): void => {
    setActiveTab(id);
  };

  const handleActiveContent = (id: number): void => {
    setActiveProfessionalContent(id);
  };

  const handleActiveProfContentOnClosing = (id: number): void => {
    if (activeProfessionalContent) {
      const object = { ...professionalSubOpen };
      object[id] = false;

      const activeContenders = Object.entries(object).filter(
        (item) => item[1] === true
      );

      if (activeContenders.length === 0) {
        setActiveProfessionalContent(0);
        return;
      }
      const randomId =
        activeContenders[Math.floor(Math.random() * activeContenders.length)];
      const ranid = parseInt(randomId[0]);
      setActiveProfessionalContent(ranid);
    }
  };

  const handleClose = (id: number, flag: boolean): void => {
    handleProfessionalSubMenu(id, flag);
    if (activeProfessionalContent === id) {
      handleActiveProfContentOnClosing(id);
    }
  };

  const getItemTitle = (id: number): string | undefined => {
    return ProfessionalSubMenuList.find((item) => item.id === id)?.title;
  };

  return (
    <div className="flex w-full h-[calc(100vh-150px)] max-h-full">
      <div className="w-full max-w-[275px] border-r border-[#314158] flex h-full overflow-clip">
        <Tabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
        {activeTab === 1 ? (
          <ProfessionalMenu
            menuOpen={subMenuOpen}
            handleSubMenu={handleSubMenu}
            professionalSubOpen={professionalSubOpen}
            handleClose={handleClose}
            handleActiveContent={handleActiveContent}
          />
        ) : activeTab === 2 ? (
          <PersonelMenu />
        ) : activeTab === 3 ? (
          <HobbiesMenu />
        ) : null}
      </div>
      <div className="w-full flex h-full">
        <ProfessionalContent
          professionalSubOpen={professionalSubOpen}
          handleActiveContent={handleActiveContent}
          getItemTitle={getItemTitle}
          handleClose={handleClose}
          activeProfessionalContent={activeProfessionalContent}
        />
        <div className="flex flex-col w-full max-w-[50%]">
          <div className="w-full h-10 border-b border-[#314158]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
