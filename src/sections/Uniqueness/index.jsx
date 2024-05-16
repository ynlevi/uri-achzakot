import { MotionDiv } from "@/components/MotionDiv";

//icons
import { BsPersonGear } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
export default function index() {
  return (
    <section className="mt-40 lg:-mt-[70vh] mx-2 xs:mx-8 lg:mx-auto lg:max-w-4xl pb-36 md:pb-44 ">
      <h2 className="">למה דווקא אורי אחזקות?</h2>
      <MotionDiv
        initial={{ opacity: 0, y: "20px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ul className="flex gap-[.15rem] lg:w-full justify-between box-border text-theme-dark mt-4">
          {benefits.map(({ icon, title, p }, i) => (
            <li
              key={i}
              className={`flex flex-col items-center text-center flex-1 max-w-[16.5rem] px-[.1rem] md:px-6 py-1 rounded-xl md:hover:shadow-2xl drop-shadow-md bg-theme-light bottom-0 md:hover:bottom-1 duration-300 relative cursor-default border md:border-[3px] border-theme-dark w-24 ${
                i === 1 && "relative bottom-4"
              }`}
            >
              {icon}
              <h3 className="font-bold whitespace-nowrap">{title}</h3>
              <p className="text-xs md:text-base">{p}</p>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </section>
  );
}

const benefits = [
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
