"use client";

import Image from "next/image";

import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Blob from "@/components/svgs/Blob";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Reviews() {
  const recommendation = [
    {
      header: "ר. בית שמש",
      p: `
        אורי נותן מקסימום מענה, גם אם זה לא קשור ישירות בעבודה אלא רק התייעצות, תמיד אפשר לפנות אליו. נתקענו עם מזגן מקולקל בחצות של ליל חמישי באוגוסט וחששנו כי כך ניכנס לשבת. אורי הגיע עם הצוות באמצע הלילה ועד שבת הבעיה נפתרה.
    `,
    },
    {
      header: "עמותת נצח יהודה",
      p: `לעמותה דירות המשמשות חיילים בודדים למגורים, עד שאורי הגיע הייתי צריך להתנהל מול עשרות בעלי מקצוע, כל תקלה הייתי צריך לחפש את בעל המקצוע המתאים שיגיע בזמן המתאים ולדאוג שהוא נותן שירות טוב. מהיום שאורי הגיע אני מתנהל מול אדם אחד שפותר לי הכל כולל הכל בכל שעה ביום. הוא תמיד זמין ונותן מענה מקצועי.`,
    },
    {
      header: "ל. לונדון",
      p: `יש לי דירה בירושלים, שאני לא גר בה בקביעות. מההתחלה הייתה לנו בעיה בחשמל, כל חודשיים שהגענו החשמל היה מקצר, המקררים הפסיקו לעבוד, אוכל התקלקל. הזמנתי חשמלאים כל פעם אמרו לי להחליף חלק אחר, אפילו החלפנו ארון חשמל בהון רב ועדיין התקלה חזרה על עצמה. אורי ידע להביא בעלי מקצוע שפתרו את הבעיה. כשלא הייתי בארץ, הוא הגיע אחרי גשם ואחרי שמש, עד שעלו על התקלה המדויקת וטיפלו בזה עד הסוף. מאז כל תחזוקת הבית תחת הידיים שלו. לפני החורף הוא עשה לנו איטום ובדק מרזבים. אורי זה שקט בראש.`,
    },
    {
      header: "ד. מקסיקו",
      p: `שבוע לפני סוכות נכנסתי לבעיה רצינית, היו לי אורחים בדירה ואני לא שם, התאורת חוץ לא עבדה, תריסי גלילה נתקעו, מוט עליון בארון נשבר, דלת כניסה הייתה תקועה ועוד יותר נורא לא הייתה לי סוכה. חבר המליץ לי על אורי ומאז אנחנו יחד. הכל טופל על הצד היותר טוב ומאז אני רגוע שאני יודע, גם שאני לא בארץ הדירה בידיים טובות. `,
    },
    {
      header: "ז. ירושלים",
      p: `בנוסף לעיסוקי הרבים, יש לי דירות שאני משכיר אבל אני לא יכול להתעסק עם זה בשוטף,אורי עושה לי את כל התיקונים והתחזוקה, פותר לי את כל הבעיות ישירות מול הדיירים, אני אפילו לא מעורב באמצע. יש לי רוגע ושקט נפשי, אורי מקצועי ואמין והכי חשוב לי שאני יכול לסמוך עליו.`,
    },
    {
      header: "ישיבה בירושלים",
      p: `הרבה זמן חיפשתי מישהו שיוכל לתחזק את מבנה הישיבה שמשתרע על מאות דונמים. התשתיות שם ישנות מאוד ומפוזרות על פני כמה קמפוסים ומכיל מאות תלמידים. יש לי אנשי צוות אחזקה שכירים במקום אבל לא ידעתי לתפעל אותם. אורי נשכר כדי לפקח על הצוות ולתת הוראות, תוך זמן קצר יעילות הצוות עלתה עשרות מונים. אנחנו עובדים יחד מאז כבר 3 שנים, אורי מלווה אותנו ואני לא רואה איך המוסד יכול לתפקד תחזוקתית בלעדיו.`,
    },
  ];

  return (
    <div className=" mx-3 xs:mx-8 xl:mx-32">
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          580: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          780: {
            slidesPerView: 3,
          },
        }}
        className="py-6 border-theme-light-dark scroll-smooth snap-mandatory snap-x "
        style={{
          "--swiper-pagination-color": "var(--theme-primary)",
          "--swiper-pagination-bullet-inactive-color": "#1da1f2",
          "--swiper-pagination-bullet-inactive-opacity": ".6",
          "--swiper-navigation-color": "var(--theme-primary)",
        }}
      >
        {recommendation.map(({ header, avatar, p }, index) => (
          <SwiperSlide
            key={index}
            className={`snap-start swiper-slide pt-5 pb-6 px-4 lg:px-7 text flex flex-col gap-4 text-[.9rem] text-justify ${
              index < recommendation.length - 1 &&
              "before:absolute before:inset-0 before:mr-[-.05rem] lg:before:mr-[-.072rem] before:h-8 before:my-auto before:right-full before:border-r-2 before:border-theme-primary before:border-dashed"
            }`}
          >
            <div className="relative flex justify-center items-center ">
              <h4 className="font-bold absolute z-[1]">{header}</h4>
              <Blob className={"text-theme-primary relative right-10 "} />
            </div>
            <p
              className=" text-theme-yellow my-1 text-center "
              style={{ letterSpacing: ".25em" }}
            >
              ★★★★★
            </p>
            <p className="mb-auto px-8 lg:px-4">{p}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
