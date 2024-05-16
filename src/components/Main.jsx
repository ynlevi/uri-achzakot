"use client";
import { useEffect } from "react";

function Main({ children }) {
  //smoth scrolling on desktop screens
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main id="content" className="min-h-screen w-full ">
      {children}
    </main>
  );
}

export default Main;
