import React from "react";
import ExperienceContent from "./ExperienceContent";
import SoftSkillsContent from "./SoftSkillsContent";
import HardSkillsContent from "./HardSkillsContent";
import { RxCross2 } from "react-icons/rx";

interface ProfessionalContentProps {
  professionalSubOpen: Record<number, boolean>;
  handleActiveContent: (id: number) => void;
  getItemTitle: (id: number) => string | undefined;
  handleClose: (id: number, flag: boolean) => void;
  activeProfessionalContent: number;
}

const ProfessionalContent: React.FC<ProfessionalContentProps> = ({
  professionalSubOpen,
  handleActiveContent,
  getItemTitle,
  handleClose,
  activeProfessionalContent,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[50%] border-r border-[#314158] h-full">
      <div className="w-full h-full max-h-10 border-b border-[#314158] flex text-[#b4c8db] overflow-scroll scrollbar-hidden">
        {Object.entries(professionalSubOpen).map(([key, isOpen]) => {
          const id = Number(key);
          if (!isOpen) return null;

          return (
            <div
              key={key}
              className="w-full max-w-fit flex justify-between items-center text-center h-full px-2 gap-8 border-r border-[#314158] text-nowrap cursor-pointer"
              onClick={() => handleActiveContent(id)}
            >
              <span>{getItemTitle(id)}</span>
              <RxCross2
                className="pt-0.5"
                size={20}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose(id, true);
                }}
              />
            </div>
          );
        })}
      </div>

      {activeProfessionalContent === 1 ? (
        <ExperienceContent />
      ) : activeProfessionalContent === 2 ? (
        <SoftSkillsContent />
      ) : activeProfessionalContent === 3 ? (
        <HardSkillsContent />
      ) : null}
    </div>
  );
};

export default ProfessionalContent;
