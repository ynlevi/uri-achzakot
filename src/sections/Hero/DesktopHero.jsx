import CldImage from "@/components/CldImage";
import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
import CTABtn from "@/components/CTABtn";

export default function DesktopHero() {
  // motion variant
  const fromRightVariant = {
    hidden: { opacity: 0, x: "50vw" },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const fromLeftVariant = {
    hidden: { x: "-50vw", opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="hidden lg:block mx-3 xs:mx-8 xl:mx-32 tracking-wide relative h-[calc(100vh-4.5rem)]">
      <div className="flex flex-col lg:flex-row justify-between ">
        <MotionDiv
          variants={fromRightVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-6xl ml-8  lg:mt-32 2xl:mt-48"
        >
          <h1 className="">
            <b>אורי אחזקות.</b>
          </h1>
          <h1 className="">
            אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
          </h1>
        </MotionDiv>

        <div className="relative md:w-[60%] lg:w-[44%] ">
          <MotionDiv
            data-scroll
            data-scroll-speed="0.5"
            variants={fromLeftVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className=" h-[20rem] md:h-[28rem] lg:h-[33rem] 2xl:h-[45rem] lg:w-[130%] lg:absolute -top-14 left-0 lg:my-40 relative"
          >
            <CldImage
              src={
                "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/b2ihh41inlwmvunovblp"
              }
              alt="hero-image"
              fill
              className="mask absolute -z-1 object-cover "
              priority
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 60vw"
            />
          </MotionDiv>
        </div>
      </div>
      <MotionDiv
        className="overflow-hidden"
        variants={fromRightVariant}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
      >
        <ul className="text-lg lg:text-xl max-w-xl mt-2">
          <li>
            <b>יש לך </b>
            המון על הראש.
          </li>
          <li>
            <b>אתה רוצה </b>להתפנות לדברים שבאמת חשובים לך.
          </li>
          <li>
            <b>אתה לא רוצה </b>
            להתעסק בתקלות היום יומיות - אלא פשוט למנוע אותם.
          </li>
          <li>
            <b className="text-2xl mt-3 md:mt-4">בדיוק בשביל זה אנחנו כאן.</b>
          </li>
          <li>
            <h4 className="text-lg lg:text-xl tracking-wide">
              צוות "אורי אחזקות" נותן מענה וליווי מקיף לכל סוגי התחזוקה והבנייה,
              אנחנו איתך מהגדרת התקלה, בליווי צמוד עם אנשי המקצוע המומחים ביותר
              בתחום עד הפיתרון המושלם ביותר.
            </h4>
          </li>
        </ul>

        <CTABtn text={"לשיחת יעוץ חינם"} />
      </MotionDiv>
    </div>
  );
}
