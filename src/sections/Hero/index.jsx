import { SlArrowDown } from "react-icons/sl";
import { Media, MediaContextProvider } from "@/components/Breackpoints";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";
export default function Hero() {
  return (
    <section>
      <MediaContextProvider>
        <Media at="sm">
          <MobileHero />
        </Media>
        <Media greaterThanOrEqual="lg">
          <DesktopHero />
        </Media>
      </MediaContextProvider>
      <div className="hidden lg:flex justify-center absolute bottom-10 w-full text-theme-light ">
        <SlArrowDown size={30} />
      </div>
    </section>
  );
}
