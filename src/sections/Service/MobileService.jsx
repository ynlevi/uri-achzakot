import MobileServiceCard from "./MobileServiceCard";

export default function MobileService() {
  const services = [
    {
      id: 0,
      name: "תחזוקת דירות",
      image:
        "https://res.cloudinary.com/dwmqmcx1w/image/upload/f_auto,q_auto/v1/uri-achzakot/a7mzyfprrjgjqfmtqhp6",
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
    <div>
      <div className=" main-bg inset-0  ">
        <h2 className="relative ">השירותים שלנו</h2>
        <div
          className="flex lg:hidden flex-col gap-4 mx-3 xs:mx-8 w-fit "
          dir="auto"
        >
          {services.map((item, index) => {
            return (
              <MobileServiceCard
                key={index}
                item={item}
                index={index}
                length={services.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
