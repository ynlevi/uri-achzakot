"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
} from "react";
// import { useBreakpoint } from "use-breakpoint";
function DisableMotionOnMobile({ children }) {
  // const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const { breakpoint } = useBreakpoint({
  //   mobile: 0,
  //   tablet: 768,
  //   desktop: 1280,
  // });

  // if (!isClient || breakpoint === "desktop") return children;
  ///Looop through each child and clone it with new props
  const modifiedChildren = Children(children, (child) => {
    //check if the child is a valid react element.
    if (isValidElement(child)) {
      const emptyAnimationProps = {
        animate: "default",
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
        variants: { default: { opacity: 1, top: 0, bottom: 0 } },
      };
      return cloneElement(child, emptyAnimationProps);
    }
    return child;
  });
  return modifiedChildren;
}

export default DisableMotionOnMobile;
