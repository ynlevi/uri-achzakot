"use client";
import React from "react";
import { useState } from "react";
import LivingRoom from "./svgs/LivingRoom";
import Building from "./svgs/Building";
import Plan from "./svgs/Plan";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LayoutGroup } from "framer-motion";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
function Choosing() {
  return <App />;
}

export default Choosing;

function App() {
  const [selectedTab, setSelectedTab] = useState(services[0]);
  return (
    <div className="mt-2 border-[12px] border-theme-light bg-theme-light text-theme-primary rounded-xl ">
      <ul className="flex  font-bold ">
        {services.map((item) => (
          <li
            key={item.id}
            className={`relative w-full text-center py-2 flex flex-col justify-between items-center ${
              item === selectedTab
                ? "bg-white cursor-default"
                : "cursor-pointer"
            }  ${item.id + 1 !== services.length && "flex border-l"} `}
            onClick={() => setSelectedTab(item)}
          >
            {item.icon}
            {item.name}
            {item.id === selectedTab.id ? (
              <motion.div
                className="absolute bottom-0 inset-x-0 h-1 bg-theme-selected"
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
      <main className=" bg-white text-theme-primary p-3">
        <AnimatePresence mode="wait">
          {selectedTab && (
            <motion.div
              key={selectedTab ? selectedTab.id : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col md:flex-row-reverse md:gap-4 "
            >
              <Image
                src={selectedTab.image}
                height={400}
                width={600}
                alt={selectedTab.name}
                className="h-52 md:h-72 w-full md:w-6/12 md:flex-auto object-cover"
              />
              <ul className="md:text-lg py-4 text-start max-w-md mx-auto flex-auto md:w-6/12 ">
                {selectedTab.details.map((string) => (
                  <li className="flex gap-1">
                    <div className="pt-[.35rem]">
                      {<IoMdCheckmarkCircleOutline />}
                    </div>

                    <div>{string}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// export function getNextIngredient(
//   ingredients: Ingredient[]
// ): Ingredient | undefined {
//   const existing = new Set(ingredients);
//   return allIngredients.find((ingredient) => !existing.has(ingredient));
// }

const services = [
  {
    id: 0,
    name: "תחזוקת דירות",
    icon: <LivingRoom />,
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
    icon: <Building />,
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
    icon: <Plan />,
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

{
  /* <ul className="flex items-end justify-between mt-4">
{services.map(({ name, icon, details }) => (
  < className="text-theme-dark border-2 border-theme-dark w-28 h-28 items-center flex flex-col text-center  tracking-normal p-3 bg-theme-light rounded-full">
    <div className="">{icon}</div>
    <b className="pb-1 mt-auto">{name}</b>
    {/* <ul>
      {details.map((detail) => (
        <li>{detail}</li>
      ))}
    </ul> */
}
