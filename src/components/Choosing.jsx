"use client";
import React from "react";
import { useState } from "react";
import LivingRoom from "./svgs/LivingRoom";
import Building from "./svgs/Building";
import Plan from "./svgs/Plan";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";
function Choosing() {
  return <App />;
}

export default Choosing;

function App() {
  const [selectedTab, setSelectedTab] = useState(services[0]);
  return (
    <div className="mt-2 border-4 border-white bg-white text-theme-primary rounded-xl overflow-auto ">
      <nav className="">
        <ul className="flex justify-between ">
          {services.map((item) => (
            <li
              key={item.id}
              className={`relative w-full text-center py-2 items-center flex-col flex ${
                item === selectedTab
                  ? "bg-theme-light cursor-default"
                  : "cursor-pointer"
              } `}
              onClick={() => setSelectedTab(item)}
            >
              {item.icon}
              {item.name}
              {item.id === selectedTab.id ? (
                <motion.div
                  className="absolute bottom-0 inset-x-0 h-[1px] bg-theme-selected"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="p-4 h-42 bg-theme-light text-theme-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.id : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab && (
              <ul>
                {selectedTab.details.map((string) => (
                  <li className="flex gap-1">
                    <div className="pt-[.35rem]">
                      {<IoMdCheckmarkCircleOutline />}
                    </div>
                    <div>{string}</div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
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
    name: "דירות",
    icon: <LivingRoom />,
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
    name: "מבנים",
    icon: <Building />,
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
    name: "תושבי חו׳׳ל",
    icon: <Plan />,
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
