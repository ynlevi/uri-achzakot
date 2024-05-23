import MobileService from "./MobileService";
import DesktopService from "./DesktopService";
import { Media, MediaContextProvider } from "@/components/Breackpoints";
export default function Service() {
  return (
    <section className="" dir="ltr">
      <MediaContextProvider>
        <Media at="sm">
          <MobileService />
        </Media>
        <Media greaterThanOrEqual="lg">
          <DesktopService />
        </Media>
      </MediaContextProvider>
    </section>
  );
}
