"use-client";
import Menu from "@/components/Menu";
import Image from "next/image";
import uriLogo from "@/../public/uri-logo.svg";
import Link from "next/link";
import Logo from "./svgs/Logo";
import MenuItems from "./MenuItems";

function Header() {
  return (
    <>
      {/* <div className="h-16 w-full bg-theme-primary "></div> */}
      <ul
        className="sticky inset-0 px-3 xs:px-8 lg:px-32 h-fit w-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-theme-primary before:to-transparent before:opacity-70 before:-z-20 z-10 "
        style={{
          backdropFilter: "blur(4px)",
          "-webkitBackdropFilter": "blur(6px)",
        }}
      >
        <div className="w-full border-b-[.1px] border-theme-light flex items-center justify-between ">
          <li className="font-bold">English</li>
          <li>
            <Link
              id="logo"
              href={"/"}
              className="h-14 w-20 lg:h-[4.4rem] lg:w-24 flex items-center justify-center inset-0 "
            >
              <Logo />
            </Link>
          </li>
          <Menu />
        </div>
      </ul>
    </>
  );
}

export default Header;
