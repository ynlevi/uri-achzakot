import CTABtn from "@/components/CTABtn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-theme-primary tracking-wide mx-8 lg:mx-32">
      <div className="md:flex md:mt-10 ">
        <div className=" text-4xl mt-10 md:mt-6 text-theme-light ml-8">
          <h1 className="font-bold">אורי אחזקות.</h1>
          <h1>
            אנחנו מציעים לך <b className="whitespace-pre">רוגע נפשי.</b>
          </h1>
        </div>
        <div className="relative h-48 w-11/12 xs:w-10/12 sm:h-64 md:w-6/12 xl:h-80 mr-auto mt-6 ">
          <Image
            src={"/happy-customer.jpg"}
            fill={true}
            className="absolute rounded-xl"
            objectFit="cover"
            property={true}
          />
        </div>
      </div>
      <ul className="text-lg mt-10 lg:mt-12 max-w-xl">
        <li>
          <b>יש לך </b>
          המון על הראש.
        </li>
        <li>
          <b>אתה רוצה </b>להתפנות לדברים שבאמת חשובים לך.
        </li>
        <li>
          <b>אתה לא רוצה </b>
          להתעסק בבעיות היום יומיות הנובעות מבלאי ושימוש במתקנים.
        </li>
        <li>
          <b>אתה צריך </b>
          מישהו אמין בעל ידים טובות, מקצועיות ויחסי אנוש מעולים, שידע לתת לך
          מענה נרחב לכל הבעיות התפעוליות.
        </li>
      </ul>
      <h2 className="font-bold text-2xl my-4">בדיוק בשביל זה אנחנו כאן.</h2>
      <CTABtn text={"שיחת יעוץ חינם"} />
    </div>
  );
}
