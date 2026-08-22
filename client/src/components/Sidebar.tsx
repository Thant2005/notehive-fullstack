import { AnimatePresence, motion } from "motion/react";
import SidebarLink from "./utils/SidebarLink";
import { Bookmark, Home, X } from "lucide-react";
import Dropdown from "./Dropdown";
import type { Dispatch, SetStateAction } from "react";
import Logo from "./utils/Logo";
interface SidbarProps {
  isOpen: boolean;
  isDesktop: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function Sidebar({ isOpen, isDesktop, setIsOpen }: SidbarProps) {
  return (
    <AnimatePresence>
      {(isOpen || isDesktop) && (
        <motion.aside
          initial={{ x: isDesktop ? 0 : -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed md:static inset-y-0 left-0 z-40  bg-surface border-r  border-r-line"
        >
          <div className="py-7 px-4">
            <div className="flex items-center gap-1">
              <Logo />
              <h1 className="text-xl font-black text-ink tracking-tight">
                Note<span className="text-primary-dark">Hive</span>
              </h1>
              <X
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-muted ml-21 cursor-pointer bg-muted/10 p-1 rounded-md "
              />
            </div>

            <div className="my-5 space-y-1 flex flex-col">
              <SidebarLink to="/" end icon={<Home width={13} />}>
                Home
              </SidebarLink>
              <SidebarLink to="/save-notes" end icon={<Bookmark width={15} />}>
                Saved
              </SidebarLink>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
