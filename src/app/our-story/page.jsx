import Image from "next/image";
import Wave from "@/components/svgs/Wave";
function page() {
  return (
    <div className="tracking-wide  ">
      <div className="mx-3 xs:mx-8 md:mx-auto max-w-3xl flex flex-col lg:flex-row gap-4 justify-between mt-16 lg:mt-24 lg:items-center ">
        <h2 className="text-5xl text-center ">קצת עליי</h2>
        <div className="relative h-52 xs:h-64 md:h-80 lg:h-96 w-full lg:max-w-xl ">
          <Image
            src={
              "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
            }
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/wa4ij5cqdxqidgpusxyy"
            fill
            className="absolute -z-10 object-cover "
            property={true}
          />
        </div>
      </div>

      <div className="relative ">
        <Wave
          color="var(--theme-light)"
          position={"top"}
          className={"relative inset-x-0 top-3 -z-0"}
        />
        <Wave
          color={"var(--theme-dark)"}
          position={"top"}
          className=" absolute inset-x-0 top-4"
        />
      </div>

      <div className=" bg-theme-dark font-medium tracking-wide text-theme-light ">
        <div className="mx-3 xs:mx-8  md:mx-auto max-w-3xl relative bottom-4 lg:bottom-10">
          {p.map((s, i) => {
            return (
              <>
                <p
                  className={` mt-2 text-xl ${
                    i === 0 &&
                    "first-letter:text-6xl first-letter:leading-10 first-letter:float-start first-letter:ml-3"
                  }`}
                  key={i}
                >
                  {s}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
const p = [
  `נעים להכיר, אני אורי, מנהל ומייסד של אורי אחזקות, בעל ניסיון של עשור בתעשיית החשמל ואחזקת דירות, המחברת בין בעלי בתים לבין אנשי המקצוע המתאימים לכל צרכי הבית שלהם. מיומן בניתוח מערכות חשמל ומיזוג אוויר וטיפול בתקלות מורכבות. מחויב לספק פתרונות יעילים וחסכוניים לבעלי בתים, מבנים ומוסדות`,
  `לפני עשור, התחלתי תוך כדי לימודי הנדסאי חשמל, שמרתי על המערכות החשמליות והמכאניות של נכסי מגורים. גיליתי שיש לי כשרון לזיהוי ופתרון תקלות מורכבות. חידדתי את כישוריי, צברתי ניסיון רב ערך, ועד מהרה מצאתי את עצמי עובר לתחום תחזוקת מבנים. בתקופה זו הבחנתי היטב בפער משמעותי בשוק – היעדר סיוע נגיש ואמין לבעלי בתים בכל הנוגע לתקלות חשמל, אינסטלציה ומיזוג אוויר.`,
  `מתוך הבנה עמוקה של התסכול וחוסר הוודאות שחווים מי שאינם מכירים את התקלות בבית, החלטתי לעשות צעד נועז, והקמתי את אורי אחזקות כדי לתת מענה לצרכים של בעלי בתים הזקוקים לסיוע בתקלות ביתיות, לרבות בעיות חשמל, אינסטלציה ומיזוג אוויר.`,
  `
אורי אחזקות הוקמה במטרה ברורה: לספק לבעלי הדירות פתרון חלק ויעיל לתקלות הביתיות שלהם. הם כבר לא יצטרכו לחפש ללא לאות אחר אנשי מקצוע מרובים כדי לטפל בנושאים מגוונים. אורי אחזקות, תחת הדרכתי, הפכה ל one stop shop עבור אנשים המבקשים סיוע באתגרי חשמל, אינסטלציה ומיזוג אוויר.`,
  `באורי אחזקות, לא רק ייעלנו את תהליך החיבור בין בעלי בתים לאנשי מקצוע מוסמכים, אלא גם טיפחנו גישה ממוקדת לקוח המבטיחה אספקת שירות מהירה ויעילה. המיקוד שלנו נשאר בלתי מתפשר – להציע פתרונות במחיר סביר מבלי להתפשר על איכות.`,
  `באמצעות אורי אחזקות, המסע שלי התפתח למשימה מונחית מטרה. אני מחויב לנצל את הניסיון הנרחב שלי כמתחזק מבנים ומומחיותי כהנדסאי חשמל כדי להדריך בעלי בתים במבוך התקלות, ולאפשר להם לחוות שקט נפשי ונוחות ללא הפרעות במבנה.`,
];
