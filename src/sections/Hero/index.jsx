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
    </section>
  );
}
