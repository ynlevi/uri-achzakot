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
      className={`${styles.card} absolute inset-0 top-16 2xl:top-28 `}
    >
      <div
        className={`${styles.el} relative bg-theme-light h-[35rem] 2xl:h-[38rem] 2xl:scale-90 inset-y-0 border border-blacksca p-3 shadow-lg`}
      >
        <div className="relative h-64 2xl:h-72 top-0 ">
          <CldImage src={image} alt={name} fill className=" object-cover" />
        </div>
        <MotionDiv className={`relative`}>
          <h4 className="backdrop-blur-[2px] absolute -top-16 font-medium text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal ">
            {name}
          </h4>
          <ul className="text-theme-dark py-3">
            {details.map((detail, index) => (
              <li key={index} className="flex gap-1 text-lg">
                <GoGoal
                  className="mt-[.35rem] w-4 shrink-0  border-theme-dark"
                  size={14}
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
