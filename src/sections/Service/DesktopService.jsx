"use client";

import { MotionDiv } from "@/components/MotionDiv";

import { useRef } from "react";

import { useScroll, motion, useTransform } from "framer-motion";

import DesktopServiceCard from "./DesktopServiceCard";
export default function DesktopService() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .7", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.55, 0.92], [1, 0]);
  const h2Opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
  const h2Scale = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const scaleMiddle = useTransform(scrollYProgress, [0.4, 1], [1, 2]);
  const scaleSides = useTransform(scrollYProgress, [0.4, 1], [1, 1.6]);
  const services = [
    {
      id: 0,
      name: "תחזוקת דירות",
      image:
        "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/a7mzyfprrjgjqfmtqhp6",
      scale: scaleSides,
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
      image:
        "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wgwqax8cufrmj27wj7bx",
      scale: scaleMiddle,
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
      image:
        "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/opcy9dgfx14tjqtf4s2i",
      scale: scaleSides,
      details: [
        "תחזוקה שוטפת של ניקיון ואוורור הדירה.",
        "בדיקה תקופתית של נזילות, קצרים חשמליים, הארקה, דודי שמש, מיזוג אויר.",
        "שילום תקופתי חשבונות חשמל ומים.",
        "בדיקת תקינות כלל המוצרים בבית במצב שמיש.",
        "טיפולי הרחקת יונים.",
      ],
    },
  ];
  return (
    <motion.div ref={ref} className="lg:h-[200vh]">
      <motion.div
        style={{ opacity }}
        className="lg:sticky  main-bg inset-0 top-20 lg:h-screen lg:overflow-hidden "
      >
        <motion.h2
          style={{ opacity: h2Opacity, scale: h2Scale }}
          className="text-center origin-bottom relative font-bold text-theme-text my-10 "
        >
          השירותים שלנו
        </motion.h2>
        <MotionDiv
          className="hidden lg:flex max-h-[80vh] flex-row-reverse gap-4 mx-8 xl:mx-32 w-auto justify-between"
          dir="auto"
        >
          {services.map((item, index) => (
            <DesktopServiceCard item={item} index={index} />
          ))}
        </MotionDiv>
      </motion.div>
    </motion.div>
  );
}
