import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
export default function CTABtn({ text, className }) {
  const fromBottomVariant = {
    hidden: {
      opacity: 0,
      y: "20vh",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      y: "-.25rem",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
  return (
    <Link href={"Tel:+972502727526"}>
      <MotionDiv
        variants={fromBottomVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300 }}
        className="w-fit rounded-2xl p-1 bg-gradient-to-tl from-theme-text via-theme-secondary to-theme-text mt-3 md:mt-4 "
      >
        <div
          className={`w-fit rounded-xl font-extrabold relative mr-auto md:ml-auto md:mr-0 tracking-wider md:text-lg p-3 bg-gradient-to-l from-theme-primary via-theme-secondary to-theme-primary text-theme-background ${className}`}
        >
          {text}
        </div>
      </MotionDiv>
    </Link>
  );
}
