"use client";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { isMobile } from "react-device-detect";
function Main({ children }) {
  //smoth scrolling on desktop screens
  useEffect(() => {
    if (isMobile) return;
    else {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
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
