import CldImage from "@/components/CldImage";
import { MotionDiv } from "@/components/MotionDiv";
import { GoGoal } from "react-icons/go";
import styles from "./styles.module.scss";
export default function DesktopService({ services }) {
  return (
    <MotionDiv
      className="hidden lg:flex max-h-[80vh] flex-row-reverse gap-4 mx-8 xl:mx-32 w-auto justify-between"
      dir="auto"
    >
      {services.map((item, index) => (
        <ServiceCardDesktop key={index} item={item} index={index} />
      ))}
    </MotionDiv>
  );
}
function ServiceCardDesktop({ item, index }) {
  const { scale, image, name, details } = item;
  return (
    <MotionDiv
      key={index}
      style={{
        scale: scale,
      }}
      className={`${styles.card} absolute inset-0 top-16 2xl:top-28`}
    >
      <div
        className={`${styles.el} relative backdrop-blur-sm bg-gradient-to-br from-theme-secondary via-theme-text to-45% to-theme-secondary 2xl:scale-90 inset-y-0 p-2 `}
      >
        <div className="relative h-[17rem] 2xl:h-72 top-0 ">
          <CldImage src={image} alt={name} fill className=" object-cover" />
        </div>
        <MotionDiv className={`relative`}>
          <h4
            style={{ backgroundColor: "rgba(38, 12, 26, 0.5)" }}
            className="backdrop-blur-[2px] absolute -top-16 text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal "
          >
            {name}
          </h4>
          <ul className="mt-2 p-3 bg-theme-text text-theme-background min-h-[17rem] 2xl:min-h-72  ">
            {details.map((detail, index) => (
              <li key={index} className="flex gap-1 lg:text-md 2xl:text-xl">
                <GoGoal
                  className="mt-[.35rem] w-4 shrink-0 text-theme-accent"
                  size={18}
                />
                <div key={index}>{detail}</div>
              </li>
            ))}
          </ul>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
