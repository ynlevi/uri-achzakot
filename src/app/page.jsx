import CTABtn from "@/components/CTABtn";
import Image from "next/image";
import { FaMedal } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";

export default function Home() {
  return (
    <div className="mx-4 xs:mx-8 lg:mx-32 text-theme-primary">
      {/* hero sectoin */}
      <section className="text-theme-primary tracking-wide">
        <div className="md:flex md:mt-10 ">
          <div className=" text-4xl mt-10 md:mt-6 text-theme-light ml-8">
            <h1 className="font-bold">אורי אחזקות.</h1>
            <h1>
              אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
            </h1>
          </div>
          <div className="relative h-48 w-11/12 xs:w-10/12 sm:h-64 md:w-6/12 xl:h-80 mr-auto mt-6 ">
            <Image
              src={"/happy-customer.jpg"}
              fill={true}
              className="absolute rounded-xl"
              objectFit="cover"
              property={true}
            />
          </div>
        </div>
        <ul className="text-lg mt-10 lg:mt-12 max-w-xl">
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
        <CTABtn text={"שיחת יעוץ חינם"} className={"mt-4"} />
      </section>
      {/* why me section */}
      <section className="mt-10">
        <ul className="flex gap-2 lg:gap-8 w-fit mx-auto">
          {benefit.map(({ icon, title, p }, i) => (
            <li
              key={i}
              className={`flex flex-col items-center text-center gap-1 flex-1 max-w-[15rem] text-theme-primary py-2 px-1 md:p-3 rounded-xl ${
                i % 2 === 0
                  ? "bg-slate-50"
                  : "border-[0.1px] border-theme-primary"
              }`}
            >
              {icon}
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm md:text-base">{p}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-10"></div>
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
    p: "זמינות ללא תחרות, כולל בתקופות הכי עמוסות בשנה",
  },
  {
    icon: <BsPersonGear size={40} />,
    title: "בגלל המומחיות",
    p: "מענה מקיף לכל סוגי התפעול כולל תקני בטיחות, חשמל ותחזוקת מבנים.",
  },
];
