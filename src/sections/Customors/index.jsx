import Wave from "@/components/svgs/Wave";
import Image from "next/image";
import Link from "next/link";
import Reviews from "./Reviews";
export default function Customors() {
  const customersLogos = [
    {
      src: "/netzach.png",
      alt: "עמותת נצח יהודה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/bet-sanedria.gif",
      alt: "בית סנהדריה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/hetz.png",
      alt: "חץ",
      link: "https://www.facebook.com/Paratroopersultraorthodox/",
    },
    {
      src: "/hechal-itchak.svg",
      alt: "ישיבת היכל יצחק",
      custom: "scale-[2] mt-2",
      link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/netzach.png",
      alt: "עמותת נצח יהודה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/bet-sanedria.gif",
      alt: "בית סנהדריה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/hetz.png",
      alt: "חץ",
      link: "https://www.facebook.com/Paratroopersultraorthodox/",
    },
    {
      src: "/hechal-itchak.svg",
      alt: "ישיבת היכל יצחק",
      custom: "scale-[2] mt-2",
      link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },

    {
      src: "/netzach.png",
      alt: "עמותת נצח יהודה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/bet-sanedria.gif",
      alt: "בית סנהדריה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/hetz.png",
      alt: "חץ",
      link: "https://www.facebook.com/Paratroopersultraorthodox/",
    },
    {
      src: "/hechal-itchak.svg",
      alt: "ישיבת היכל יצחק",
      custom: "scale-[2] mt-2",
      link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/netzach.png",
      alt: "עמותת נצח יהודה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/bet-sanedria.gif",
      alt: "בית סנהדריה",
      link: "https://netzahyehuda.org",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
    {
      src: "/hetz.png",
      alt: "חץ",
      link: "https://www.facebook.com/Paratroopersultraorthodox/",
    },
    {
      src: "/hechal-itchak.svg",
      alt: "ישיבת היכל יצחק",
      custom: "scale-[2] mt-2",
      link: "https://he.wikipedia.org/wiki/ישיבת_היכל_יצחק",
    },
    {
      src: "/maccabi.png",
      alt: "maccabi",
      link: "https://www.maccabi4u.co.il",
    },
  ];
  return (
    <section className="relative bg-theme-accent mb-0 mt-20">
      <Wave
        position={"top"}
        className="absolute -top-20 md:-top-52 lg:-top-64 -z-10 inset-0 "
        color={"var(--theme-accent)"}
      />
      <Wave
        position={"top"}
        color="var(--theme-secondary)"
        className="-z-[12] -top-[5.3rem] md:-top-[13.3rem] lg:-top-[16.3rem] -inset-x-0 absolute "
      />
      <h2 className="mx-3 xs:mx-8 lg:mx-32 ">מה הלקוחות שלנו מספרים:</h2>

      <Reviews />
      <div className="overflow-hidden relative pb-6 inset-x-0 pt-12  before:md:h-36 before:lg:h-44 before:w-3/12 before:absolute before:bg-gradient-to-l before:from-theme-dark before:to-transparent before:bottom-0  before:top-0 after:absolute after:bg-gradient-to-r after:from-theme-dark after:to-transparent after:w-3/12 before:md:from-35% after:md:from-35% after:left-0 after:top-0 after:bottom-0  before:z-[1] after:z-[1] after:md:h-36 after:lg:h-44">
        <ul
          dir="ltr"
          className="flex gap-6  "
          style={{ animation: "30s move-right infinite linear" }}
        >
          {customersLogos.map(({ src, alt, link, custom }, index) => (
            <li
              key={index}
              className={`relative rounded-lg shrink-0 my-auto flex items-center w-32 h-20 md:w-44 md:h-28 ${
                index % 2 === 0
                  ? "border-[.1px] border-theme-light text-white "
                  : "bg-white shadow-md"
              }`}
            >
              <Link aria-label={alt} target="_blank" href={link}>
                <Image
                  fill
                  src={src}
                  alt={alt}
                  decoding="async"
                  className={`p-1 md:p-3 object-contain ${custom}`}
                ></Image>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
