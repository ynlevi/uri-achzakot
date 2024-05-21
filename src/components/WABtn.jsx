"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { PiArrowUpLeftBold, PiArrowUpLeftThin } from "react-icons/pi";
import { TbArrowUpLeft } from "react-icons/tb";

import { motion, useAnimation, useAnimate } from "framer-motion";
import { useEffect } from "react";
export default function WABtn() {
  const controls = useAnimation();
  const [scope, animate] = useAnimate();
  const controlInitialMedia = {
    scale: [1, 1.1, 1.2, 1],
    transition: { duration: 4, repeat: Infinity },
  };
  const controlInitialDesktop = {
    scale: [1, 1.05, 1.1, 1],
    transition: { duration: 5, repeat: Infinity },
  };

  const handleOver = (status) => {
    if (status === "start") {
      controls.stop();
      animate("a", { x: "77%" });
      animate("h5", { visibility: "hidden" });
      animate("h6", { visibility: "visible" });
    } else if (status === "end") {
      controls.start(controlInitialDesktop);
      animate("a", { x: "0" });
      animate("h6", { visibility: "hidden" });
      animate("h5", { visibility: "visible" });
    }
  };

  return (
    <>
      {/* on mobile */}
      <motion.li
        animate={controls}
        whileInView={() => controls.start(controlInitialMedia)}
        onTap={controls.stop}
        className="lg:hidden text-theme- bg-theme-whatsapp relative before:absolute before:inset-0 before:bg-theme-light before:scale-75 before:-z-[1] p-1 rounded-md"
      >
        <FaWhatsapp size={30} />
      </motion.li>
      {/* on desktop */}
      <motion.li
        ref={scope}
        animate={controls}
        whileInView={() => controls.start(controlInitialDesktop)}
        onHoverStart={() => handleOver("start")}
        onHoverEnd={() => handleOver("end")}
        className="w-[12.5rem] whitespace-nowrap overflow-hidden hidden lg:inline-block border-theme-whatsapp border-4 rounded-full bg-theme-dark rounded-r-full"
      >
        <a
          className="flex items-center gap-1"
          href="https://wa.me/+972502727526"
        >
          <h5 className=" font-semibold pl-1 pr-2 tracking-wide">
            כאן בשבילכם תמיד.
          </h5>
          <div className="bg-theme-whatsapp rounded-full p-1 border-2 border-theme-whatsapp">
            <FaWhatsapp className="" size={35} color="#ece5dd" />
          </div>
          <h6 className="invisible pl-2 flex gap-1 font-semibold tracking-wider items-center">
            <p>מעבר לוואטסאפ </p>
            <TbArrowUpLeft size={20} className="mt-1" />
          </h6>
        </a>
      </motion.li>
    </>
  );
}
