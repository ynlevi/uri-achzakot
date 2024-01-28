import CTABtn from "@/components/CTABtn";
import Image from "next/image";
import { FaMedal } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <div className=" text-theme-primary -mt-[25rem] ">
      {/* hero sectoin */}
      <section className="mx-3 xs:mx-8 lg:mx-32 text-theme-primary tracking-wide">
        <div className="md:flex md:mt-10 ">
          <div className=" text-4xl mt-10 md:mt-6 text-theme-light ml-8">
            <h1 className="font-bold">אורי אחזקות.</h1>
            <h1>
              אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
            </h1>
          </div>
          <div className="relative inset-0 -z-10 h-48 w-11/12 xs:w-10/12 sm:h-64 md:w-6/12 xl:h-[22rem] mr-auto mt-6 ">
            <Image
              src={"/happy-customer.jpg"}
              fill={true}
              className="absolute rounded-xl -z-10 "
              objectFit="cover"
              property={true}
            />
          </div>
        </div>
        <ul className="text-lg lg:text-xl mt-12 max-w-xl">
          <li>
            <b>יש לך </b>
            המון על הראש.
          </li>
          <li>
            <b>אתה רוצה </b>להתפנות לדברים שבאמת חשובים לך.
          </li>
          <li>
            <b>אתה לא רוצה </b>
            להתעסק בבעיות היום יומיות הנובעות מבלאי ושימוש במתקנים.
          </li>
          <li>
            <b>אתה צריך </b>
            מישהו אמין בעל ידים טובות, מקצועיות ויחסי אנוש מעולים, שידע לתת לך
            מענה נרחב לכל הבעיות התפעוליות.
          </li>
        </ul>
        <h2 className="font-bold text-2xl mt-2">בדיוק בשביל זה אנחנו כאן.</h2>
        <CTABtn text={"שיחת יעוץ חינם"} className={"mt-4 "} />
      </section>
      {/* why me section */}
      <section className="mt-10 mx-3 xs:mx-8 lg:mx-32">
        <ul className="flex gap-[.4rem] lg:gap-8 w-fit mx-auto">
          {benefit.map(({ icon, title, p }, i) => (
            <li
              key={i}
              className={`flex flex-col items-center text-center gap-1 flex-1 max-w-[15rem] text-theme-primary py-2 px-1 md:px-6 rounded-xl ${
                i % 2 === 0
                  ? "bg-slate-50 "
                  : "border-[0.1px] border-theme-primary bg-theme-light"
              }`}
            >
              {icon}
              <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden">
                {title}
              </h3>
              <p className="text-sm md:text-base">{p}</p>
            </li>
          ))}
        </ul>
      </section>
      {/*our customors */}
      <section className="mt-5 pt-5 relative bg-gray-100">
        <h2 className="text-3xl mx-3 xs:mx-8 lg:mx-32 ">מבין לקוחותינו :</h2>
        <ul className="overflow-hidden relative inset-x-0 py-4 before:h-28 before:w-3/12 before:absolute before:bg-gradient-to-l before:from-gray-100 before:to-transparent before:bottom-0  before:top-0 after:absolute after:bg-gradient-to-r after:from-gray-100 after:to-transparent after:w-3/12 after:left-0 after:top-0 after:bottom-0  before:z-[1] after:z-[1] ">
          <div
            dir="ltr"
            className="flex gap-6  "
            style={{ animation: "10s move-right infinite linear" }}
          >
            {customersLogos.map(({ src, alt, link }, index) => (
              <li
                className={`rounded-xl shrink-0 w-32 md:w-fit p-2 md:p-3  ${
                  index % 2 === 0
                    ? "bg-theme-light "
                    : "border-[.1px] border-theme-primary "
                }`}
              >
                <a target="_blank" href={link}>
                  <Image
                    width="160"
                    height="160"
                    src={src}
                    alt={alt}
                    decoding="async"
                  ></Image>
                </a>
              </li>
            ))}
          </div>
        </ul>
      </section>
      {/* our servise */}
      <div className="bg-gradient-to-b from-gray-100 to-transparent absolute h-[25vh] w-screen -z-10" />
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
      </section>

      <div className="mt-96 mb-96 h-96"></div>
    </div>
  );
}
const benefit = [
  {
    icon: <FaMedal size={40} />,
    title: "בגלל הנסיון",
    p: "נסיון רב והכרות עמוקה עם המומחים הכי מבוקשים בשוק.",
  },
  {
    icon: <MdOutlineEventAvailable size={40} />,
    title: "בגלל הזמינות",
    p: "זמינות ללא תחרות, כולל בתקופות הכי עמוסות בשנה.",
  },
  {
    icon: <BsPersonGear size={40} />,
    title: "בגלל המומחיות",
    p: "מענה מקיף לכל סוגי התפעול כולל תקני בטיחות, חשמל ותחזוקת מבנים.",
  },
];
const services = [
  "בדיקת תקנים קבועה במעונות וצהרונים, כולל בדיקות בטיחות.",
  "כל השירותים התפעוליים כמו בעיות אינסטלציה, חשמל, צבע ובניה.",
  "שירותי ניקיון ותחזוקה שוטפת לדירות לתושבי חוץ.",
  "עבודה תיקנית עם אנשי מקצוע בעלי שם ומנהלי אתרים המוכרים במשרד העבודה.",
  "עבודה צמודה עם כל אנשי המקצוע הרלוונטים (מהנדנסים, אדריכלים, חשמלאים ואנשי מיזוג).",
];
const customersLogos = [
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
  {
    src: "https://netzahyehuda.org/wp-content/uploads/2020/05/cropped-לוגו.png",
    alt: "עמותת נצח יהודה",
    link: "https://netzahyehuda.org",
  },
];
