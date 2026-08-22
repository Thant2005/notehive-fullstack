import { ChevronDown, ChevronUp, Dot, Sidebar } from "lucide-react";

import { useState } from "react";
import SidebarLink from "./utils/SidebarLink";
import { AnimatePresence, motion } from "motion/react";

function Dropdown() {
  const dropItems = ["Express.js", "JavaScript", "PHP"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-sm font-extrabold mb-2 text-muted flex justify-between px-2 items-center w-60"
      >
        <span>Courses</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute"
          >
            {dropItems.map((item, index) => (
              <SidebarLink
                key={index}
                to={`${index === 0 ? "/" : `/${item}`}`}
                end
                icon={<Dot width={20} height={20} />}
              >
                {item}
              </SidebarLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
