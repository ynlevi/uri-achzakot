import CldImage from "@/components/CldImage";
import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";
export default function Story() {
  return (
    <section className="absolute  inset-x-0 z-[1] xs:mx-8 lg:mx-auto lg:max-w-4xl ">
      {/* <div className="shadow-lg lg:flex md:flex-row md:gap-5 bg-theme-light relative bottom-24 mx-auto px-5 lg:pb-0 rounded-xl text-theme-primary ">
        <div className="border-y-[1.25rem] border-theme-light overflow-hidden h-auto md:flex-auto md:w-52 ">
          <div data-scroll data-scroll-speed=".07">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative h-52 w-full z-[1] lg:h-64 scale-125"
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
        </div>
        <div className="lg:flex lg:justify-between lg:flex-col md:w-64 md:flex-auto md:my-5">
          <h3 className="text-2xl font-semibold ">נעים להכיר, אני אורי.</h3>
          <p className="text-lg">
            מנהל ומייסד של אורי אחזקות בעל ניסיון של עשור בתעשיית החשמל ואחזקת
            דירות, המחברת בין בעלי בתים לבין אנשי המקצוע המתאימים לכל צרכי הבית
            שלהם. מיומן בניתוח מערכות חשמל ומיזוג אוויר וטיפול בתקלות מורכבות.
            מחויב לספק פתרונות יעילים וחסכוניים לבעלי בתים, מבנים ומוסדות.
          </p>
          <Link aria-label="הסיפור שלנו" href={"/our-story"}>
            <div
              className={`w-fit rounded-xl tracking-wide font-extrabold hover:shadow-lg relative hover:-translate-y-1 duration-300 mt-4 bg-theme-primary text-theme-light px-6 py-3 `}
            >
              קרא עוד
            </div>
          </Link>
        </div>
      </div> */}
    </section>
  );
}
