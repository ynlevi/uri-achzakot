"use client";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import styles from "./styles.module.scss";
import React, { useEffect, useRef } from "react";
import ParallaxDiv from "@/components/ParallaxDiv";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Service() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .7", "end end"],
  });

  const scaleMiddle = useTransform(scrollYProgress, [0.4, 1], [1, 2]);
  const scaleSides = useTransform(scrollYProgress, [0.4, 1], [1, 1.6]);

  const opacityOnDesktop = useTransform(scrollYProgress, [0.55, 0.92], [1, 0]);
  const h2OpacityOnDesktop = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
  const h2Scale = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
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
        style={{ opacity: !isMobile && opacityOnDesktop }}
        className="lg:sticky  main-bg inset-0 lg:top-[4.9rem] lg:h-screen lg:overflow-hidden "
      >
        <ParallaxDiv yStartAt={0} yEndAt={isMobile ? 140 : 80}>
          <motion.h2
            style={{ opacity: h2OpacityOnDesktop, scale: h2Scale }}
            className=" text-center origin-bottom text-4xl lg:text-5xl relative "
          >
            השירותים שלנו
          </motion.h2>
          <motion.div
            className=" lg:max-h-[80vh] flex flex-col lg:flex-row-reverse gap-4 mx-3 xs:mx-8 xl:mx-32 w-fit lg:w-auto lg:justify-between "
            dir="auto"
          >
            {services.map((item, index) => (
              <ServiceCardDesktop item={item} index={index} />
            ))}
          </motion.div>
        </ParallaxDiv>
      </motion.div>
    </motion.div>
  );
}
// isMobile ? (
//   <ServiceCardMedia
//     item={item}
//     index={index}
//     length={services.length}
//   />
// ) :

// function ServiceCardMedia({ item, index, length }) {
//   return (
//     <div
//       className={`relative bg-theme-light min-h-[32rem] rounded-tr-3xl rounded-bl-3xl p-3 `}
//       key={index}
//     >
//       <div className="relative h-64 top-0 ">
//         <Image
//           src={item.image}
//           alt={item.name}
//           fill
//           placeholder="blur"
//           blurDataURL={item.image}
//           className="object-cover rounded-tr-3xl  rounded-bl-3xl"
//         />
//       </div>

//       <div className={`relative `}>
//         <ParallaxDiv yStartAt={35} yEndAt={-35}>
//           <h4 className="backdrop-blur-[2px] absolute -top-[4.5rem] font-medium text-theme-light px-3 max-w-full text-nowrap py-2 theme-dark-with-opacity md:mt-0 text-3xl ">
//             {item.name}
//           </h4>
//         </ParallaxDiv>
//         <ul className="text-theme-dark text-lg py-3">
//           {item.details.map((detail, index) => (
//             <li className="flex gap-1">
//               <GoGoal className="mt-[.35rem] w-4 shrink-0 " size={14} />
//               <div key={index}>{detail}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {index < length - 1 && (
//         <>
//           <div className="absolute -bottom-4 right-0 h-4 w-4">
//             <div className="bg-theme-primary relative z-[1] h-full w-full rounded-tr-3xl "></div>
//             <div className="absolute top-0 bg-theme-light w-full h-full z-0 rounded-bl-full "></div>
//           </div>
//           <div className="absolute -bottom-4 left-0 h-4 w-4">
//             <div className="bg-theme-primary relative z-[1] h-full w-full rounded-bl-3xl "></div>
//             <div className="absolute top-0 bg-theme-light w-full h-full z-0 rounded-tr-full "></div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

function ServiceCardDesktop({ item, index }) {
  const { scale, image, name, details } = item;
  return (
    <motion.div
      key={index}
      style={{
        scale: scale,
      }}
      className={`${styles.card} absolute inset-0 top-16 2xl:top-28 `}
    >
      <div
        className={`${styles.el} relative bg-theme-light h-[35rem] 2xl:h-[38rem] 2xl:scale-90 inset-y-0 border border-blacksca p-3 shadow-lg`}
      >
        <div className="relative h-64 2xl:h-72 top-0 ">
          <Image
            src={image}
            alt={name}
            placeholder="blur"
            blurDataURL={item.image}
            fill
            className=" object-cover"
          />
        </div>
        <motion.div className={`relative`}>
          <h4 className="backdrop-blur-[2px] absolute -top-16 font-medium text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal ">
            {name}
          </h4>
          <ul className="text-theme-dark py-3">
            {details.map((detail, index) => (
              <li className="flex gap-1 text-lg">
                <GoGoal
                  className="mt-[.35rem] w-4 shrink-0  border-theme-dark"
                  size={14}
                />
                <div key={index}>{detail}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
