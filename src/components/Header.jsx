import Link from "next/link";
import Logo from "./svgs/Logo";
import HeaderBg from "./HeaderBg";

import WABtn from "./WABtn";
function Header() {
  return (
    <>
      <HeaderBg />
      <div className="inset-0 px-3 xs:px-8 lg:px-32 w-full z-10 fixed top-0 h-14 lg:h-[4.8rem] text-shadow-md">
        <ul className="w-full  flex items-center justify-between h-full">
          <li className="font-bold ">English</li>
          <li className="absolute h-14 lg:h-[4.8rem] right-[calc(50vw-2.5rem)] lg:right-[calc(50vw-3.5rem)]">
            <Link
              id="logo"
              href={"/"}
              aria-label="לעמוד הראשי"
              className="h-14 w-20 lg:h-[4.8rem] lg:w-[7rem] flex items-center justify-center inset-0   "
            >
              <Logo />
            </Link>
          </li>
          <WABtn />
        </ul>
      </div>
    </>
  );
}

export default Header;
