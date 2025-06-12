import { FaCaretRight } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiOpenFolder } from "react-icons/gi";
import ContactMenuItems from "../commen/contact/ContactMenuItems";

interface MenuProps {
  menuOpen: Record<number, boolean>;
  handleSubMenu: (id: number) => void;
  professionalSubOpen: Record<number, boolean>;
  handleClose: (id: number, flag: boolean) => void;
  handleActiveContent: (id: number) => void;
}

interface SubMenuProps {
  open: Record<number, boolean>;
  handleClose: (id: number, flag: boolean) => void;
  handleActiveContent: (id: number) => void;
}

export const ProfessionalSubMenuList = [
  { id: 1, title: "experience", color: "#f57023" },
  { id: 2, title: "soft-skills", color: "#58f198" },
  { id: 3, title: "hard-skills", color: "#1a7beb" },
];

const ProfessionalSubMenu = ({
  open,
  handleClose,
  handleActiveContent,
}: SubMenuProps) => {
  return (
    <div className="flex flex-col text-white border-b border-[#314158] p-1">
      {ProfessionalSubMenuList.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 items-center p-2 py-1 cursor-pointer"
          onClick={() => {
            handleClose(item.id, false);
            handleActiveContent(item.id);
          }}
        >
          {open[item.id] ? <FaChevronDown /> : <FaChevronRight />}
          <GiOpenFolder color={item?.color} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

const ProfessionalMenu = ({
  menuOpen,
  handleSubMenu,
  professionalSubOpen,
  handleClose,
  handleActiveContent,
}: MenuProps) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div
        className="h-10 border-b border-[#314158] flex gap-2 items-center p-2 text-white cursor-pointer"
        onClick={() => handleSubMenu(1)}
      >
        {menuOpen[1] ? <FaCaretDown /> : <FaCaretRight />}
        <h1 className="text-center">professional_info</h1>
      </div>
      {menuOpen[1] && (
        <ProfessionalSubMenu
          open={professionalSubOpen}
          handleClose={handleClose}
          handleActiveContent={handleActiveContent}
        />
      )}
      <ContactMenuItems menuOpen={menuOpen} handleSubMenu={handleSubMenu} />
    </div>
  );
};

export default ProfessionalMenu;
