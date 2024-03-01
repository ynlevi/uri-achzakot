"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

export default function Reviews() {
  const recommendation = [
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `
        אורי נותן מקסימום מענה, גם אם זה לא קשור ישירות בעבודה אלא רק התייעצות, תמיד אפשר לפנות אליו. נתקענו עם מזגן מקולקל בחצות של ליל חמישי באוגוסט וחששנו כי כך ניכנס לשבת. אורי הגיע עם הצוות באמצע הלילה ועד שבת הבעיה נפתרה.
    `,
    },
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `לעמותה דירות המשמשות חיילים בודדים למגורים, עד שאורי הגיע הייתי צריך להתנהל מול עשרות בעלי מקצוע, כל תקלה הייתי צריך לחפש את בעל המקצוע המתאים שיגיע בזמן המתאים ולדאוג שהוא נותן שירות טוב. מהיום שאורי הגיע אני מתנהל מול אדם אחד שפותר לי הכל כולל הכל בכל שעה ביום. הוא תמיד זמין ונותן מענה מקצועי.`,
    },
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `יש לי דירה בירושלים, שאני לא גר בה בקביעות. מההתחלה הייתה לנו בעיה בחשמל, כל חודשיים שהגענו החשמל היה מקצר, המקררים הפסיקו לעבוד, אוכל התקלקל. הזמנתי חשמלאים כל פעם אמרו לי להחליף חלק אחר, אפילו החלפנו ארון חשמל בהון רב ועדיין התקלה חזרה על עצמה. אורי ידע להביא בעלי מקצוע שפתרו את הבעיה. כשלא הייתי בארץ, הוא הגיע אחרי גשם ואחרי שמש, עד שעלו על התקלה המדויקת וטיפלו בזה עד הסוף. מאז כל תחזוקת הבית תחת הידיים שלו. לפני החורף הוא עשה לנו איטום ובדק מרזבים. אורי זה שקט בראש.`,
    },
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `שבוע לפני סוכות נכנסתי לבעיה רצינית, היו לי אורחים בדירה ואני לא שם, התאורת חוץ לא עבדה, תריסי גלילה נתקעו, מוט עליון בארון נשבר, דלת כניסה הייתה תקועה ועוד יותר נורא לא הייתה לי סוכה. חבר המליץ לי על אורי ומאז אנחנו יחד. הכל טופל על הצד היותר טוב ומאז אני רגוע שאני יודע, גם שאני לא בארץ הדירה בידיים טובות. `,
    },
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `בנוסף לעיסוקי הרבים, יש לי דירות שאני משכיר אבל אני לא יכול להתעסק עם זה בשוטף,אורי עושה לי את כל התיקונים והתחזוקה, פותר לי את כל הבעיות ישירות מול הדיירים, אני אפילו לא מעורב באמצע. יש לי רוגע ושקט נפשי, אורי מקצועי ואמין והכי חשוב לי שאני יכול לסמוך עליו.`,
    },
    {
      name: "אלה רונדל",
      city: "קרית אתא",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      p: `הרבה זמן חיפשתי מישהו שיוכל לתחזק את מבנה הישיבה שמשתרע על מאות דונמים. התשתיות שם ישנות מאוד ומפוזרות על פני כמה קמפוסים ומכיל מאות תלמידים. יש לי אנשי צוות אחזקה שכירים במקום אבל לא ידעתי לתפעל אותם. אורי נשכר כדי לפקח על הצוות ולתת הוראות, תוך זמן קצר יעילות הצוות עלתה עשרות מונים. אנחנו עובדים יחד מאז כבר 3 שנים, אורי מלווה אותנו ואני לא רואה איך המוסד יכול לתפקד תחזוקתית בלעדיו.`,
    },
  ];
  const containerRef = useRef(null);
  const maxPosition = recommendation.length - 3;
  const [containerPosition, setContainerPosition] = useState(0);
  const changePoition = (side) => {
    containerRef.current.scrollLeft += side === "right" ? +300 : -300;
    setContainerPosition((prev) =>
      side === "right" && prev > 0
        ? prev - 1
        : side === "left" && prev < maxPosition
        ? prev + 1
        : prev
    );
  };
  return (
    <div className="relative px-3 xs:px-8 xl:px-32">
      <div className="hidden lg:flex absolute z-[1] inset-0 mx-3 xs:mx-8 lg:mx-32 items-center justify-between ">
        <button
          className={`relative left-[22.5px] bg-theme-light  ${
            containerPosition > 0 ? "text-theme-primary" : "text-gray-300"
          }`}
          type="button"
          id="slide"
          onClick={() => changePoition("right")}
        >
          <FaCircleChevronRight size={45} />
        </button>
        <button
          className={`relative right-[22.5px] bg-theme-light ${
            containerPosition < maxPosition
              ? "text-theme-primary"
              : "text-gray-300"
          }`}
          type="button"
          id="slide"
          onClick={() => changePoition("left")}
        >
          <FaCircleChevronLeft size={45} />
        </button>
      </div>
      <ul
        className=" snap-mandatory flex  py-6 overflow-scroll snap-x scroll-smooth border-2 border-theme-light-dark"
        ref={containerRef}
      >
        {recommendation.map(({ name, city, avatar, p }, index) => (
          <li
            key={index}
            className={`relative snap-center min-w-full sm:min-w-[66%] md:min-w-[33.333%] py-4 px-10 lg:px-10 text-center flex flex-col gap-4 tracking-wide text-[.9rem] ${
              index < recommendation.length - 1 &&
              "after:absolute after:inset-0 after:h-10 after:my-auto after:right-full after:border-l after:border-gray-300 after:border-dashed"
            }`}
          >
            <div className="flex justify-center items-center gap-2">
              <div className="">
                <h4 className="font-bold ">{name}</h4>
                <h4 className="">{city}</h4>
              </div>
              <div className="relative h-20 w-20">
                <Image
                  src={avatar}
                  blurDataURL={avatar}
                  fill={true}
                  className="object-cover rounded-full "
                  alt={name}
                ></Image>
              </div>
            </div>
            <p
              className=" text-theme-yellow"
              style={{ letterSpacing: ".25em" }}
            >
              ★★★★★
            </p>
            <p>{p}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
