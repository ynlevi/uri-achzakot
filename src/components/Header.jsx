import Link from "next/link";
import Logo from "./svgs/Logo";
import HeaderBg from "./HeaderBg";

import WABtn from "./WABtn";
function Header() {
  return (
    <>
      <HeaderBg />
      <ul className="inset-0 px-3 xs:px-8 lg:px-32 w-full z-10 fixed top-0 h-fit ">
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
          <WABtn />
        </div>
      </ul>
    </>
  );
}

export default Header;
