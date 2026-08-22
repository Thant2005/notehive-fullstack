import { Menu, Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import Logo from "./utils/Logo";

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function Header({ setIsOpen }: HeaderProps) {
  return (
    <header className="max-w-full flex justify-between items-center bg-surface border-l border-b border-l-line border-b-line py-3 px-3 md:px-6">
      <div className="flex items-center gap-2">
        <Menu
          size={25}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-muted block cursor-pointer hover:bg-primary-soft p-1 rounded-md"
        />
        <div className="md:block hidden">
          <h2 className="text-md font-extrabold">Prisma</h2>
          <p className="text-muted text-xs">428 students</p>
        </div>
        {/* brand logo */}
        <div className="flex md:hidden  items-center gap-1">
          <Logo />
          <h2 className="tracking-tight font-black ">
            Note<span className="text-primary">Hive</span>
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Search width={15} className="font-semibold cursor-pointer" />
        <div className="bg-primary rounded-full w-8 h-8 text-center flex items-center justify-center text-white text-[10px] font-extrabold p-2">
          TW
        </div>
      </div>
    </header>
  );
}

export default Header;
