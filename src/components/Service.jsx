"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function Service() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  //   const x = useTransform(
  //     scrollYProgress,
  //     [0, 0.1, 0.8, 1],
  //     ["0%", "-10%", "-40%", "-67.5%"]
  //   );

  //   const width = useTransform(scrollYProgress, [0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest);
  });
  return (
    <motion.div className="h-[150vh] ">
      <motion.ul className="sticky top-[25vh] pt-14 flex gap-4 overflow-x-hidden lg:overflow-x-clip lg:top-8">
        <h2 className="text-4xl text-center absolute top-0 z-50 inset-x-0">
          השירותים שלנו
        </h2>
        <motion.div
          className="flex flex-row-reverse gap-4 w-fit lg:flex-col"
          //   style={{ x }}
          dir="auto"
        >
          {services.map((item, index) => (
            <motion.li
              ref={ref}
              className={` border-2 border-theme-dark rounded-xl relative w-[93vw] h-72 lg:w-[22rem] lg:border-0 `}
              //   style={index === 0 && { flex: "1 1 0", height: "25rem" }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-xl object-cover"
              />
              <div
                className={`absolute bottom-6 font-medium text-white tracking-wide p-4 py-2 theme-dark-with-opacity md:mt-0`}
                style={{
                  backdropFilter: "blur(2px)",
                  "-webkitBackdropFilter": "blur(2px)",
                }}
              >
                <h4 className="text-3xl tracking-normal ">{item.name}</h4>
              </div>
            </motion.li>
          ))}
        </motion.div>
      </motion.ul>
    </motion.div>
  );
}
const services = [
  {
    id: 0,
    name: "תחזוקת דירות",

    image: "/apartment.jpg",
    details: [
      "ניהול צוות תחזוקה למתן מענה לכל הצרכים השוטפים של מוסדות.",
      "ניקיון: מבנה, אבזור טואלטיקה שירותים, חצרות, גינון.",
      "תשתיות: חשמל, אינסטלציה, השחלות כבלים רשת.",
      "תיקונים ותוספות: גבס, צבע, ריצוף, איטום ובניה קלה",
      "לווי מהנדסים לחיזוקי מבנה.",
      "בדיקה תקופתית על ידי מהנדס/ יועץ בטיחות, עבור אישור תמ״ת.",
    ],
  },
  {
    id: 1,
    name: "תחזוקת מבנים",

    image: "/building.jpg",
    details: [
      "תחזוקה וניקיון של שטחים משותפים במבנים ומחסנים.",
      "שילום תקופתי חשבונות חשמל ומים.",
      "מעקב תקינות חשמל, ספרינקלרים, עמודות אש.",
      "עבודות גינון וטיפוח שטחי חוץ.",
      "תקינות תאורת פנים, חוץ, גינה, פוטו צל.",
      "ניקיון שטחים משותפים, חדרי אשפה.",
      "תחזוקת צבע, בדיקת נזילות, איטום יריעות.",
      "חיזוק קורות.",
      "טיפולי הרחקת יונים.",
    ],
  },
  {
    id: 2,
    name: "תחזוקת נכסים לתושבי חו׳׳ל",

    image: "/hul.jpg",
    details: [
      "תחזוקה שוטפת של ניקיון ואוורור הדירה.",
      "בדיקה תקופתית של נזילות, קצרים חשמליים, הארקה, דודי שמש, מיזוג אויר.",
      "שילום תקופתי חשבונות חשמל ומים.",
      "בדיקת תקינות כלל המוצרים בבית במצב שמיש.",
      "טיפולי הרחקת יונים.",
    ],
  },
];
