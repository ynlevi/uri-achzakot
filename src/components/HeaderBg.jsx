"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function HeaderBg() {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const y = useTransform(scrollY, [10, 170], ["-80px", "0px"]);
  const opacity = useTransform(scrollY, [0, 10], [1, 0]);

  return (
    <>
      <motion.div
        ref={ref}
        className="h-14 lg:h-[4.8rem]  backdrop-blur-md w-full bg-transparent z-[2] fixed top-0 before:bg-theme-secondary before:absolute before:h-14 before:lg:h-[4.8rem] before:w-full before:inset-0 before:opacity-50 "
        style={{
          y,
        }}
      />
      <motion.div
        ref={ref}
        className="top-14 lg:top-[4.8rem] w-screen absolute bg-gradient-to-l from-transparent via-theme-secondary to to-transparent h-[1px]"
        style={{ opacity }}
      ></motion.div>
    </>
  );
}

export default HeaderBg;
