import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet } from "react-router";
import NoteActionBar from "../NoteActionBar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-h-screen max-w-full mx-auto flex ">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      <Sidebar isOpen={isOpen} isDesktop={isDesktop} setIsOpen={setIsOpen} />
      <main className="max-w-full w-full ">
        <div className="sticky top-0 ">
          <Header setIsOpen={setIsOpen} />
        </div>
        <div className="mx-auto">
          <NoteActionBar />
          <Outlet />
        </div>
      </main>
    </div>
  );
}
