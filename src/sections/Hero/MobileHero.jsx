import CldImage from "@/components/CldImage";
import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
export default function MobileHero() {
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
    <div className="lg:hidden mx-3 xs:mx-8 xl:mx-32 tracking-wide relative ">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className=" text-4xl md:text-6xl ml-8  lg:mt-32 2xl:mt-48">
          <h1 className="">
            <b>אורי אחזקות.</b>
          </h1>
          <h1 className="">
            אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
          </h1>
        </div>

        <div className=" ">
          <div
            data-scroll
            data-scroll-speed="0.15"
            className=" h-[20rem] md:h-[28rem] 2xl:h-[45rem] left-0 relative md:w-[60%]"
          >
            <CldImage
              src={
                "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/b2ihh41inlwmvunovblp"
              }
              alt="hero-image"
              fill
              className="mask absolute -z-1 object-cover "
              priority={true}
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 60vw"
            />
          </div>
        </div>
      </div>
      <div>
        <ul className="text-lg max-w-xl md:mt-4">
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
          <h4 className="text-lg tracking-wide">
            צוות "אורי אחזקות" נותן מענה וליווי מקיף לכל סוגי התחזוקה והבנייה,
            אנחנו איתך מהגדרת התקלה, בליווי צמוד עם אנשי המקצוע המומחים ביותר
            בתחום עד הפיתרון המושלם ביותר.
          </h4>
        </ul>

        <MotionDiv
          variants={fromBottomVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-fit rounded-xl tracking-wide font-extrabold relative mt-3 md:mt-4 mr-auto md:ml-auto md:mr-0 bg-theme-whatsapp text-lg p-3 shadow-lg text-theme-light border-theme-light border-2 `}
        >
          <Link href={"Tel:+972502727526"}>לשיחת יעוץ חינם</Link>
        </MotionDiv>
      </div>
    </div>
  );
}
