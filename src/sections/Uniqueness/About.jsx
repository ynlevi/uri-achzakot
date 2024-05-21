import { MotionDiv } from "@/components/MotionDiv";
import CldImage from "@/components/CldImage";
import Link from "next/link";
export default function About() {
  return (
    <div className="shadow-lg md:flex-row md:gap-5 bg-theme-light mt-5 max-w-6xl mx-auto rounded-xl flex flex-col-reverse lg:grid grid-cols-3 ">
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
              className={`border-2 border-theme-text w-fit rounded-xl tracking-wide font-extrabold hover:shadow-lg relative hover:-translate-y-1 duration-300 mt-4 bg-theme-primary text-theme-text px-6 py-2 `}
            >
              קרא עוד
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="border-y-[1.25rem] border-theme-accent bg-red-300 overflow-hidden h-auto md:flex-auto">
        <div data-scroll data-scroll-speed=".07">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-44 w-full z-[1] lg:h-52 scale-125"
          >
            <CldImage
              src={
                "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
              }
              alt="our-story-image"
              fill
              className="absolute -z-10 object-cover "
            />
          </MotionDiv>
        </div>
      </div> */}
      <div className="h-56 lg:h-auto bg-gradient-to-r from-theme-secondary to-transparent rounded-l-xl p-[2px] pr-0 top-3 lg:top-0 relative">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full w-full "
        >
          <CldImage
            src={
              "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
            }
            alt="our-story-image"
            fill
            className="absolute object-cover rounded-l-xl "
          />
        </MotionDiv>
      </div>
      <div className="hidden lg:block rounded-xl relative bg-gradient-to-tr from-theme-secondary to-theme-background to-20%">
        <div className="relative inset-0 h-full w-full -top-[.10rem] -right-[.10rem] bg-theme-background rounded-xl "></div>
      </div>
    </div>
  );
}
