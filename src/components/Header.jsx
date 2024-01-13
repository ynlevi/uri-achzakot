import MobileMenu from "@/components/MobileMenu";
function Header() {
  return (
    <>
      <div className="bg-gradient-to-b from-theme-primary  to-transparent  h-[50vh] absolute w-full -z-10" />
      <ul className="flex justify-between px-2 h-14 items-center ">
        <li>english</li>
        <li className="absolute h-14 flex items-center mx-40 justify-center inset-0">
          אורי אחזקות
        </li>
        <li>
          <MobileMenu />
        </li>
      </ul>
    </>
  );
}

export default Header;
