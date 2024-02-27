"use client";
import Image from "next/image";
import ServiceCardMedia from "./ServiceCardMedia";
import React, { useEffect, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function Service() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .7", "end end"],
  });
  const mediaEffect = useTransform(
    scrollYProgress,
    [0.5, 0.56, 0.8, 0.9],
    ["0%", "-10%", "-40%", "-67.5%"]
  );
  // const desktopEffect = useTransform  = (i) =>(

  // )

  const opacity = useTransform(scrollYProgress, [0.92, 1], [1, 0]);
  const h2Scale = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.4], ["0", "6vh", "10vh"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest);
  });
  return (
    <motion.div ref={ref} className="h-[200vh] ">
      <motion.div
        style={{ opacity }}
        className="sticky z-10 main-bg inset-0  h-screen overflow-x-hidden "
      >
        <motion.div className=" ">
          <motion.h2
            style={{ scale: h2Scale }}
            className=" text-center origin-bottom text-5xl relative"
          >
            השירותים שלנו
          </motion.h2>
          <motion.ul
            className="flex pt-7 flex-row-reverse gap-4 w-fit mx-3 xs:mx-8 xl:mx-32 "
            // style={{ x: mediaEffect }}
            dir="auto"
          >
            {services.map((item, index) => (
              <ServiceCardMedia
                // style={{ x: desktopEffect(index) }}
                item={item}
                index={index}
              />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
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
