import { MotionDiv } from "@/components/MotionDiv";
import CldImage from "@/components/CldImage";
import Link from "next/link";
import ParallaxDiv from "@/components/ParallaxDiv";
export default function About() {
  return (
    <div className="shadow-lg md:flex-row md:gap-5  bg-theme-light mt-1 lg:mt-5 lg:max-w-4xl mx-auto rounded-xl flex flex-col-reverse pb-10">
      <div className="bg-gradient-to-bl from-theme-secondary from-55% to-transparent lg:bg-gradient-to-l lg:from-theme-secondary  lg:to-transparent text-theme-background rounded-xl rounded-l-none p-[2px] pl-0 relative z-[3] grow">
        <div className="lg:flex lg:my-auto lg:justify-center lg:flex-col md:flex-auto p-4 rounded-xl rounded-l-none bg-theme-accent  lg:ml-0 lg:h-full">
          <h3 className="text-theme-secondary ">נעים להכיר, אני אורי.</h3>
          <p className="text-sm text-theme-text my-1">
            מנהל ומייסד של אורי אחזקות בעל ניסיון של עשור בתעשיית החשמל ואחזקת
            דירות, המחברת בין בעלי בתים לבין אנשי המקצוע המתאימים לכל צרכי הבית
            שלהם. מיומן בניתוח מערכות חשמל ומיזוג אוויר וטיפול בתקלות מורכבות.
            מחויב לספק פתרונות יעילים וחסכוניים לבעלי בתים, מבנים ומוסדות.
          </p>
          <Link aria-label="הסיפור שלנו" href={"/our-story"}>
            <div
              className={` w-fit rounded-xl tracking-wide font-extrabold hover:shadow-lg relative hover:-translate-y-1 duration-300 mt-4 bg-theme-primary text-theme-background px-6 py-2 lg:mt-2 `}
            >
              קרא עוד
            </div>
          </Link>
        </div>
      </div>

      <div className="h-56 lg:h-64 lg:w-[90rem] grow rounded-l-xl top-3 lg:top-0 relative overflow-hidden z-[1] bg-gradient-to-r from-theme-secondary to-transparent p-[2px] pr-0">
        <div className="h-full relative z-0 overflow-hidden rounded-xl rounded-r-none">
          <ParallaxDiv
            className={"h-full w-full"}
            yStartAt={30}
            yEndAt={-35}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <CldImage
              src={
                "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
              }
              alt="our-story-image"
              fill
              className="absolute object-cover rounded-l-xl scale-125 "
            />
          </ParallaxDiv>
        </div>
      </div>
    </div>
  );
}
