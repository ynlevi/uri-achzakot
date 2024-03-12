"use-client";
import Menu from "@/components/Menu";
import Image from "next/image";
import uriLogo from "@/../public/uri-logo.svg";
import Link from "next/link";
import Logo from "./svgs/Logo";
import MenuItems from "./MenuItems";
import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Header() {
  return (
    <>
      <ul className="backdrop-blur-sm inset-0 px-3 xs:px-8 lg:px-32 w-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-theme-primary before:to-theme-primary before:opacity-70 before:-z-20 z-10 fixed top-0 h-fit ">
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

          <li className="hidden lg:inline-block border-theme-whatsapp border-4 rounded-full bg-theme-dark rounded-r-full">
            <a className="flex items-center gap-1 " href="#">
              <h5 className=" font-bold pr-2">כאן בשבילכם תמיד.</h5>
              <div className="bg-theme-whatsapp rounded-full p-1 scale-105 ">
                <FaWhatsapp className="" size={35} />
              </div>
            </a>
          </li>
          <li className="lg:hidden text-theme-whatsapp relative before:absolute before:inset-0 before:bg-theme-light before:scale-75 before:-z-[1]">
            <FaWhatsappSquare size={50} />
          </li>
        </div>
      </ul>
    </>
  );
}

export default Header;
