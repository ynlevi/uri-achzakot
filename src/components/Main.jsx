"use client";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { MotionConfig } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";
function Main({ children }) {
  //   const containerRef = useRef();

  //smoth scrolling on desktop screens
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>{children}</main>
      <Footer />
    </MotionConfig>
  );
}

export default Main;
