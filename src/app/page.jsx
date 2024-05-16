//sections:
import Hero from "@/sections/Hero";
import Service from "@/sections/Service/index";
import Uniqueness from "@/sections/Uniqueness/index";
import Reviews from "@/sections/Customors/Reviews";
import Story from "@/sections/Story";
import Customors from "@/sections/Customors";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <Service />
      <Uniqueness />
      <Story />
      <Customors />
    </div>
  );
}

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
