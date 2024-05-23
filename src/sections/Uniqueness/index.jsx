import { MotionDiv, MotionItem } from "@/components/MotionDiv";

//icons
import { BsPersonGear } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import available from "../../../public/avaiable.svg";
import contractor from "../../../public/contractor.svg";
import Image from "next/image";
import { MdOutlineEventAvailable } from "react-icons/md";
import About from "./About";

export default function index() {
  return (
    <section className="mt-40 lg:-mt-[70vh] pb-[18vh] lg:pb-[30vh] px-3 xs:px-8 lg:px-32 w-full  ">
      <h2 className="mb-4  font-bold text-theme-text ">
        מגיע לך <span className="text-theme-secondary">רמה אחרת</span>.
      </h2>
      <ul className="max-w-6xl grid lg:grid-cols-3 gap-4 lg:gap-5 mt-4 mx-auto w-full justify-center ">
        {benefits.map(({ icon, title, p }, i) => (
          <MotionItem
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={i}
            transition={{ duration: 0.8 }}
            className={`border-theme-secondary hover:border-theme-accent border-4  p-4 flex gap-2 lg:gap-4 flex-col rounded-xl   relative  max-w-fit bg-theme-secondary text-theme-background `}
          >
            <h3 className="font-bold whitespace-nowrap text-2xl text-theme-accent">
              {title}
            </h3>
            <div className="text-theme-accent ">{icon}</div>
            <p className="text md:text-base">{p}</p>
          </MotionItem>
        ))}
      </ul>
      <About />
    </section>
  );
}

const benefits = [
  {
    icon: (
      <Image src={contractor} height={80} width={80} className="-mr-[2px]" />
    ),
    title: "המומחיות.",
    p: `אצלנו תקבלו מענה מקיף לכל סוגי התחזוקה, הבניה והתחזוק השוטף, מניעת תקלות ופתרון בעיות מורכבות.`,
  },
  {
    icon: <CiMedal size={80} strokeWidth={0.01} className="-mr-[10px]" />,
    title: "הניסיון.",
    p: `עשור של מתן שרותים מגוונים בכל סוגי המבנים מתחזוקת מוסדות ועד דירות,
    חללים משותפים, פנים וחוץ.`,
  },
  {
    icon: (
      <Image src={available} width={70} height={70} className="-mr-[3.5px]" />
    ),
    title: "הזמינות.",
    p: `כל הפתרונות במרחק טלפון אחד, מול חברה אחת שנותנת לך מעטפת מלאה, כולל מענה מיידי לתקלות SOS, גם בתקופות העמוסות ביותר בשנה.`,
  },
];
