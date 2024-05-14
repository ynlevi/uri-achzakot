"use client";

import Blob from "@/components/svgs/Blob";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function FlotObjects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className=" bg-red-500 border-black border-8 md:absolute inset-x-0 top-0 z-[2] z-40 h-40 w-40">
      {/* right side */}
      <Blob className={"right-14 top-10 text-theme-primary -rotate-12"} />
      <Blob
        className={
          "z-0 scale-110 right-[3.47rem] top-[2.58rem] text-theme-dark -rotate-12 "
        }
      />
      {/* left side */}
      <Blob className={"left-14 top-56 text-theme-light rotate-12"} />
      <Blob
        className={
          "z-0 scale-110 left-[3.52rem] top-[14.1rem] text-theme-blue rotate-12 "
        }
        color={"var(--theme-light)"}
      />
    </div>
  );
}
