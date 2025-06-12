import { FaCaretRight } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

interface MenuProps {
  menuOpen: Record<number, boolean>;
  handleSubMenu: (id: number) => void;
}

const ContactMenuItems = ({ menuOpen, handleSubMenu }: MenuProps) => {
  return (
    <div className="flex flex-col max-w-full cursor-pointer">
      <div
        className="flex gap-2 items-center border-b text-white border-[#314158] h-10 p-2"
        onClick={() => handleSubMenu(2)}
      >
        {menuOpen[2] ? <FaCaretDown /> : <FaCaretRight />}
        <h1 className="text-center">contact_info</h1>
      </div>
      {menuOpen[2] && (
        <div className="flex flex-col p-2 text-[#85a5c4]">
          <div className="flex gap-2 items-center">
            <IoMail />
            <p className="break-words">deepsinghyadav933@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoCall />
            <p>+919506284426</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMenuItems;
