"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MenuItems({ handleClick }) {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map(({ name, path }, i) => (
        <li key={i} className="py-1 capitalize list-none tracking-widest">
          <Link
            href={path}
            className={`py-1  ${
              path === pathname ? "text-theme-cta font-bold" : "font-light"
            }`}
            onClick={handleClick}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
}

const menuItems = [
  { name: "עמוד הבית", path: "/" },
  { name: "קצת עליי", path: "/about-us" },
  { name: "בלוג", path: "/blog" },
];
