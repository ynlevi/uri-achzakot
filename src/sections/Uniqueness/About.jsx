import { MotionDiv } from "@/components/MotionDiv";
import CldImage from "@/components/CldImage";
import Link from "next/link";
export default function About() {
  return (
    <div className="shadow-lg md:flex-row md:gap-5 bg-theme-light mt-5 max-w-6xl mx-auto rounded-xl flex flex-col-reverse lg:grid grid-cols-3 pb-10">
      <div className="bg-gradient-to-bl from-theme-secondary from-55% to-transparent lg:bg-gradient-to-l lg:from-theme-secondary  lg:to-transparent text-theme-background rounded-xl rounded-l-none p-[2px] pl-0 relative z-[1] ">
        <div className="lg:flex lg:justify-between lg:flex-col md:flex-auto p-4 rounded-xl rounded-l-none bg-theme-accent  lg:ml-0">
          <h3 className="text-2xl font-semibold text-theme-secondary ">
            נעים להכיר, אני אורי.
          </h3>
          <p className="text-sm text-theme-text">
            מנהל ומייסד של אורי אחזקות בעל ניסיון של עשור בתעשיית החשמל ואחזקת
            דירות, המחברת בין בעלי בתים לבין אנשי המקצוע המתאימים לכל צרכי הבית
            שלהם. מיומן בניתוח מערכות חשמל ומיזוג אוויר וטיפול בתקלות מורכבות.
            מחויב לספק פתרונות יעילים וחסכוניים לבעלי בתים, מבנים ומוסדות.
          </p>
          <Link aria-label="הסיפור שלנו" href={"/our-story"}>
            <div
              className={` w-fit rounded-xl tracking-wide font-extrabold hover:shadow-lg relative hover:-translate-y-1 duration-300 mt-4 bg-theme-primary text-theme-background px-6 py-2 `}
            >
              קרא עוד
            </div>
          </Link>
        </div>
      </div>

      <div className="h-56 lg:h-auto bg-gradient-to-r from-theme-secondary to-transparent rounded-l-xl p-[2px] pr-0 top-3 lg:top-0 relative">
        <div className="h-full z-10 overflow-hidden rounded-l-xl">
          <MotionDiv
            data-scroll
            data-scroll-speed="0.04"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full w-full bg-red-700"
          >
            <CldImage
              src={
                "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
              }
              alt="our-story-image"
              fill
              className="absolute object-cover rounded-l-xl scale-125"
            />
          </MotionDiv>
        </div>
      </div>
      {/* squres illstration for astetic perposes */}
      <div className="hidden xl:flex rounded-xl relative">
        <div className="rounded-xl absolute bg-theme-accent top-0 left-0 h-20 w-20 "></div>
        <div className="rounded-xl absolute border-2 border-theme-secondary top-24 left-0 h-10 w-28"></div>
        <div className="rounded-xl absolute bg-theme-text bottom-0 h-20 w-10 left-0"></div>
        <div className="rounded-xl absolute bg-theme-text top-0 left-32 h-[8.5rem] w-[8.5rem]"></div>
        <div className="rounded-xl absolute bg-theme-secondary h-20 w-36 bottom-0 left-14"></div>
        <div className="rounded-xl absolute bg-theme-accent h-10 w-28 bottom-0 right-12"></div>
        <div className="rounded-xl absolute bg-theme-secondary h-[5.6rem] w-[5.6rem] right-0 bottom-14"></div>
      </div>
    </div>
  );
}
