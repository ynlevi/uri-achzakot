"use-client";
import Menu from "@/components/Menu";
import Image from "next/image";
import uriLogo from "@/../public/uri-logo.svg";
import Link from "next/link";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

function Header() {
  return (
    <>
      <div className="h-16 w-full bg-theme-primary "></div>
      <div className="bg-gradient-to-b from-theme-primary to-transparent h-[50vh] sticky -top-52 w-full -z-10" />
      <ul
        className="fixed inset-0 px-3 xs:px-8 lg:px-32 h-fit flex w-full items-center justify-between before:absolute before:inset-0 before:bg-gradient-to-b before:from-theme-primary before:to-transparent before:opacity-70 before:-z-20 z-10 "
        style={{
          backdropFilter: "blur(4px)",
          "-webkitBackdropFilter": "blur(6px)",
        }}
      >
        <li className="font-bold">English</li>
        <li>
          <Link
            id="logo"
            href={"/"}
            className="h-14 w-20 lg:h-[4.4rem] lg:w-24 flex items-center justify-center inset-0"
          >
            <Logo />
          </Link>
        </li>
        <Menu />
      </ul>
    </>
  );
}

export default Header;
