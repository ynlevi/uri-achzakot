import CTABtn from "@/components/CTABtn";
import Image from "next/image";
import { FaMedal, FaRegBuilding } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Service from "@/components/Service";

import Choosing from "@/components/Choosing";
import Wave from "@/components/svgs/Wave";

import FlotObjects from "@/components/FlotObjects";
export default function Home() {
  // const scrollYService = scrollYService;
  return (
    <div className="">
      {/* hero sectoin */}
      <section className="mx-3 xs:mx-8 xl:mx-32 tracking-wide relative my-8 md:my-24 lg:my-28">
        <div className="md:flex  md:max-w-xl lg:max-w-2xl">
          <div className="text-4xl md:text-6xl ml-8 ">
            <h1 className="">
              <b>אורי אחזקות.</b>
            </h1>
            <h1 className="">
              אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
            </h1>
          </div>

          <div className="mask relative md:absolute h-[19rem] w-[22rem] md:scale-125 lg:scale-150 top-0 left-0 -z-10  mr-auto mt-6">
            {/* <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400"> */}
            <Image
              src={"/holding-house.jpg"}
              fill={true}
              className="absolute -z-1 object-cover"
              property={true}
            />
          </div>
        </div>
        <ul className="text-lg lg:text-xl max-w-xl md:mt-4">
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
          {/* <li>
            <b>אתה צריך </b>
            מישהו אמין בעל ידים טובות, מקצועיות ויחסי אנוש מעולים.
          </li> */}
          <h2 className="text-2xl mt-3 md:mt-4">
            <b>בדיוק בשביל זה אנחנו כאן.</b>
          </h2>
          <h4 className="text-lg lg:text-xl tracking-wide">
            צוות "אורי אחזקות" נותן מענה וליווי מקיף לכל סוגי התחזוקה והבנייה,
            אנחנו איתך מהגדרת התקלה, בליווי צמוד עם אנשי המקצוע המומחים ביותר
            בתחום עד הפיתרון המושלם ביותר.
          </h4>
        </ul>

        <CTABtn
          text={"לשיחת יעוץ חינם"}
          url={"contact"}
          className={"mt-3 md:mt-4 mr-auto md:ml-auto md:mr-0 bg-theme-cta "}
        />
      </section>
      {/* our service */}
      <section
        //  scrollYService={scrollYService}
        className=""
        dir="ltr"
      >
        <Service />
      </section>
      {/* how can we help
      <section className="mx-3 xs:mx-8 lg:mx-auto tracking-wide max-w-4xl text-center">
        <h2 className="text-3xl">היי! איך אפשר לעזור?</h2>
        <h4 className="text-lg">לחצו על השירות המבוקש לפירוט נוסף</h4>
        <Choosing />
      </section> */}
      {/* why me section */}
      <section className="-mt-[70vh]  mx-3 xs:mx-8 lg:mx-auto lg:max-w-4xl pb-32 md:pb-44 ">
        <h2 className="text-4xl text-center">למה דווקא אורי אחזקות?</h2>
        <ul className="flex gap-[.4rem] lg:w-full justify-between box-border mt-4 ">
          {benefit.map(({ icon, title, p }, i) => (
            <li
              key={i}
              className={`flex flex-col items-center text-center gap-1 flex-1 max-w-[15rem]  px-[.15rem] md:px-6 text-theme-primary py-1  rounded-xl md:hover:shadow-2xl drop-shadow-md bg-white bottom-0 md:hover:bottom-1 duration-300 relative cursor-default border-4 md:border-8 border-theme-light w-24`}
            >
              {icon}
              <h3 className="font-bold text-lg whitespace-nowrap ">{title}</h3>
              <p className="text-sm md:text-base">{p}</p>
            </li>
          ))}
        </ul>
      </section>
      {/*our story */}
      <section className="absolute  inset-x-0 z-[1] mt-3 md:-mt-4 mx-3 xs:mx-8 lg:mx-auto lg:max-w-4xl">
        <div className="shadow-lg border-4 border-theme-primary flex flex-col md:flex-row md:gap-8 bg-white relative bottom-24  mx-auto p-5 rounded-xl text-theme-primary ">
          <div className="relative h-52 w-full z-[1] md:flex-auto md:w-52 md:h-64 ">
            <Image
              src={"/happy-customer.jpg"}
              fill
              className="absolute -z-10 object-cover"
              property={true}
            />
          </div>
          <div className="md:w-64 md:flex-auto">
            <h2 className="text-2xl mt-3 mb-1 font-semibold ">
              נעים להכיר, אני אורי.
            </h2>
            <p>
              מנהל ומייסד של אורי אחזקות בעל ניסיון של עשור בתעשיית החשמל ואחזקת
              דירות, המחברת בין בעלי בתים לבין אנשי המקצוע המתאימים לכל צרכי
              הבית שלהם. מיומן בניתוח מערכות חשמל ומיזוג אוויר וטיפול בתקלות
              מורכבות. מחויב לספק פתרונות יעילים וחסכוניים לבעלי בתים, מבנים
              ומוסדות.
            </p>
            <CTABtn
              text={"קרא עוד"}
              url={"/our-story"}
              className={"mt-4 bg-theme-primary "}
            />
          </div>
        </div>
      </section>
      {/*our customors */}
      <section className="mt-32 md:mt-24 relative bg-theme-light text-theme-primary  pt-[27rem] xs:pt-96 md:pt-48">
        <Wave
          position={"top"}
          className="absolute -top-20 md:-top-52 -z-10 inset-0 "
          color={"var(--theme-light)"}
        />
        <Wave
          position={"top"}
          color="var(--theme-dark)"
          className="-z-[12] -top-[5.3rem] md:-top-[13.2rem] -inset-x-0 absolute"
        />
        <FlotObjects />
        <h2 className="text-3xl mx-3  xs:mx-8 lg:mx-32 text-center -mt-10">
          לקוחות מרוצים שלנו
        </h2>
        <ul className="overflow-hidden relative pb-6 inset-x-0 pt-4 before:h-28 before:md:h-36 before:w-3/12 before:absolute before:bg-gradient-to-l before:from-theme-light before:to-transparent before:bottom-0  before:top-0 after:absolute after:bg-gradient-to-r after:from-theme-light after:to-transparent after:w-3/12 before:md:from-60% after:md:from-60%  after:left-0 after:top-0 after:bottom-0  before:z-[1] after:z-[1] after:md:h-36 ">
          <div
            dir="ltr"
            className="flex gap-6  "
            style={{ animation: "30s move-right infinite linear" }}
          >
            {customersLogos.map(({ src, alt, link, custom }, index) => (
              <li
                className={`relative rounded-xl shrink-0 my-auto flex items-center w-32 h-20 md:w-44 md:h-28 ${
                  index % 2 === 0
                    ? "border-[.1px] border-theme-dark "
                    : "bg-white "
                }`}
              >
                <a target="_blank" href={link}>
                  <Image
                    fill
                    src={src}
                    alt={alt}
                    decoding="async"
                    className={`p-1 md:p-3 object-contain ${custom}`}
                  ></Image>
                </a>
              </li>
            ))}
          </div>
        </ul>
      </section>
    </div>
  );
}

const benefit = [
  {
    icon: <BsPersonGear size={40} />,
    title: "בגלל המומחיות",
    p: `אצלנו תקבלו מענה מקיף לכל סוגי התחזוקה, הבניה והתחזוק השוטף, מניעת תקלות ופתרון בעיות מורכבות.`,
  },
  {
    icon: <FaMedal size={40} />,
    title: "בגלל הנסיון",
    p: `עשור של מתן שרותים מגוונים בכל סוגי המבנים מתחזוקת מוסדות ועד דירות,
    חללים משותפים, פנים וחוץ.`,
  },
  {
    icon: <MdOutlineEventAvailable size={40} />,
    title: "בגלל הזמינות",
    p: `כל הפתרונות במרחק טלפון אחד, מול חברה אחת שנותנת לך מעטפת מלאה, כולל מענה מיידי לתקלות SOS, גם בתקופות העמוסות ביותר בשנה.`,
  },
];

const customersLogos = [
  {
    src: "/netzach.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/bet-sanedria.gif",
    alt: "בית סנהדריה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/hechal-itchak.svg",
    alt: "ישיבת היכל יצחק",
    custom: "scale-[2] mt-2",
    link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
  },
  {
    src: "/hetz.png",
    alt: "חץ",
    link: "https://www.facebook.com/Paratroopersultraorthodox/",
  },
  {
    src: "/netzach.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/bet-sanedria.gif",
    alt: "בית סנהדריה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/hechal-itchak.svg",
    alt: "ישיבת היכל יצחק",
    custom: "scale-[2] mt-2",
    link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
  },
  {
    src: "/hetz.png",
    alt: "חץ",
    link: "https://www.facebook.com/Paratroopersultraorthodox/",
  },
  {
    src: "/netzach.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/bet-sanedria.gif",
    alt: "בית סנהדריה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/hechal-itchak.svg",
    alt: "ישיבת היכל יצחק",
    custom: "scale-[2] mt-2",
    link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
  },
  {
    src: "/hetz.png",
    alt: "חץ",
    link: "https://www.facebook.com/Paratroopersultraorthodox/",
  },
  {
    src: "/netzach.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/bet-sanedria.gif",
    alt: "בית סנהדריה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "/hechal-itchak.svg",
    alt: "ישיבת היכל יצחק",
    custom: "scale-[2] mt-2",
    link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
  },
  {
    src: "/hetz.png",
    alt: "חץ",
    link: "https://www.facebook.com/Paratroopersultraorthodox/",
  },
];

{
  /* our servise - probebly not goona be in use */
}
{
  /* <div className="bg-gradient-to-b from-gray-100 to-transparent absolute h-[25vh] w-screen -z-10" />
      <section className="mt-10 w-fit tracking-wide mx-3 xs:mx-8 lg:mx-32">
        <h2 className="text-3xl ">השירותים שלנו כוללים:</h2>
        <ul className="mt-4">
          {services.map((p, index) => (
            <li className="flex gap-2 items-center text-lg ">
              <div className="max-w-6 pt-1 mb-auto">
                <IoMdCheckmarkCircleOutline size={20} />
              </div>
              <p className="">{p}</p>
            </li>
          ))}
          <li></li>
        </ul>
      </section> */
}

// const services = [
//   "בדיקת תקנים קבועה במעונות וצהרונים, כולל בדיקות בטיחות.",
//   "כל השירותים התפעוליים - בניה והרחבת מתקנים, צבע, אניסטלציה, חשמל, טיפול בנזקי צנרת ורטיבות וניקוי מרזבים.",
//   "שירותי ניקיון ותחזוקה שוטפת לדירות לתושבי חוץ.",
//   "עבודה תיקנית עם אנשי מקצוע בעלי שם ומנהלי אתרים המוכרים במשרד העבודה.",
//   "עבודה צמודה עם כל אנשי המקצוע הרלוונטים (מהנדנסים, אדריכלים, חשמלאים ואנשי מיזוג).",
// ];

{
  /* <ul className="text-sm">
                  {item.details.map((string, j) => (
                    <li key={j} className="flex gap-1">
                      <div className="pt-[.35rem]">
                        {<IoMdCheckmarkCircleOutline />}
                      </div>

                      <div>{string}</div>
                    </li>
                  ))}
                </ul> */
}
