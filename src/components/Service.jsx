"use client";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import styles from "@/styles/Service.module.scss";
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
  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 2]);

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
        className="sticky z-10 main-bg inset-0 top-14 lg:top-[4.5rem]  h-screen overflow-hidden "
      >
        <motion.div className=" ">
          <motion.h2
            style={{ scale: h2Scale }}
            className=" text-center origin-bottom text-5xl relative"
          >
            השירותים שלנו
          </motion.h2>
          <motion.ul
            className="flex pt-7 flex-row-reverse gap-4 lg:gap-0 mx-3 xs:mx-8 xl:mx-32 w-fit lg:w-auto lg:justify-between "
            // style={{ x: mediaEffect }}
            dir="auto"
          >
            {services.map((item, index) => (
              // <ServiceCardMedia item={item} index={index} />
              <ServiceCardDesktop scale={scale} item={item} index={index} />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCardMedia({ item, index }) {
  return (
    <motion.li className={`bg-theme-light w-[93vw]`} key={index}>
      <div className="relative h-64 top-0 ">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className=" object-cover"
        />
      </div>

      <div className={`relative`}>
        <h4 className="backdrop-blur-[2px] absolute -top-16 font-medium text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal ">
          {item.name}
        </h4>
        <ul className="text-black p-4">
          {item.details.map((detail, index) => (
            <div className="flex gap-1">
              <GoGoal
                className="mt-[.35rem] w-4 shrink-0  border-black"
                size={14}
              />
              <li key={index}>{detail}</li>
            </div>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

function ServiceCardDesktop({ scale, item, index }) {
  return (
    <motion.li key={index} style={{ scale }} className={styles.card}>
      <div
        className={`relative bg-theme-light h-[33rem] w-[22rem] inset-y-0 border-4  `}
      >
        <div className="relative h-64 top-0 ">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className=" object-cover"
          />
        </div>
        <motion.div className={`relative`}>
          <h4 className="backdrop-blur-[2px] absolute -top-16 font-medium text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal ">
            {item.name}
          </h4>
          <ul className="text-black p-4">
            {item.details.map((detail, index) => (
              <div className="flex gap-1">
                <GoGoal
                  className="mt-[.35rem] w-4 shrink-0  border-black"
                  size={14}
                />
                <li key={index}>{detail}</li>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.li>
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
