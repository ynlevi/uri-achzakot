"use client";
import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import MenuItems from "./MenuItems";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [neverOpen, setNeverOpen] = useState(true);
  const hamburger = {
    shown: { y: 0, transition: { delay: 0.75 } },
    hidden: { y: "-100px" },
  };
  const toggleClick = () => setIsOpen((prev) => !prev);
  const firstClick = () => setNeverOpen(false);

  return (
    <div className="w-8">
      <AnimatePresence>
        {isOpen ? (
          <MenuOpen key="open" handleClick={toggleClick} />
        ) : (
          <motion.button
            key="hamburger"
            onClick={() => {
              toggleClick();
              firstClick();
            }}
            variants={!neverOpen && hamburger}
            initial="hidden"
            animate="shown"
            exit="hidden"
          >
            <VscMenu size={30} className="" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

const MenuOpen = ({ handleClick }) => {
  const menuScreen = {
    initial: { y: "-100vh" },
    shown: {
      y: 0,

      transition: {
        delay: 0.25,
        type: "tween",
      },
    },
    exit: {
      y: "-100vh",

      transition: { delay: 0.5, type: "tween" },
    },
  };
  return (
    <>
      <motion.div
        onClick={handleClick}
        className="px-3 xs:px-8 lg:px-32 cursor-pointer text-opacity-100 opacity-[87%] text-2xl z-40 bg-theme-primary absolute inset-0 h-[100vh] "
        variants={menuScreen}
        initial="initial"
        animate="shown"
        exit="exit"
      >
        <motion.div
          initial={{ y: "-500px" }}
          animate={{ y: 0, transition: { delay: 0.5 } }}
          exit={{ y: "-500px" }}
          className=" pt-3 mr-auto w-fit"
        >
          <VscClose size={40} />
        </motion.div>
        <motion.ul
          initial={{ y: "-180%" }}
          animate={{
            y: 0,
            transition: {
              delay: 0.85,
              duration: 0.5,
              type: "spring",
              stiffness: "140",
            },
          }}
          exit={{ y: "-180%", transition: { delay: 0.25 } }}
          transition={{}}
          className="flex w-fit flex-col gap-3 mx-auto text-center relative z-50 top-10 cursor-default "
          onClick={(e) => e.stopPropagation()}
        >
          <MenuItems handleClick={handleClick} />
        </motion.ul>
      </motion.div>
    </>
  );
};
