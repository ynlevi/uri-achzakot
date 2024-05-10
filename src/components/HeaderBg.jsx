"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function HeaderBg() {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const y = useTransform(scrollY, [90, 170], ["-200px", "0px"]);

  return (
    <motion.div
      ref={ref}
      className="h-14 lg:h-[4.8rem] backdrop-blur-sm  w-full bg-transparent z-[2] fixed top-0 before:bg-theme-primary before:absolute before:h-14 before:lg:h-[4.8rem] before:w-full before:inset-0 before:opacity-50 "
      style={{
        y,
        backdropFilter: "blur(6px)",
        "-webkitBackdropFilter": "blur(6px)",
      }}
    />
  );
}

export default HeaderBg;
