import CldImage from "@/components/CldImage";
import ParallaxDiv from "@/components/ParallaxDiv";
import { GoGoal } from "react-icons/go";
export default function MobileService({ services }) {
  return (
    <div
      className="flex lg:hidden flex-col gap-4 mx-3 xs:mx-8 w-fit "
      dir="auto"
    >
      {services.map((item, index) => {
        return (
          <ServiceCardMobile
            key={index}
            item={item}
            index={index}
            length={services.length}
          />
        );
      })}
    </div>
  );
}

function ServiceCardMobile({ item, index, length }) {
  return (
    <div
      className={`relative bg-theme-light min-h-[32rem] rounded-tr-3xl rounded-bl-3xl p-3 `}
      key={index}
    >
      <div className="relative h-64 top-0 ">
        <CldImage
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-tr-3xl rounded-bl-3xl"
        />
      </div>

      <div className={`relative `}>
        <ParallaxDiv yStartAt={35} yEndAt={-35}>
          <h4 className="backdrop-blur-[2px] absolute -top-[4.5rem] font-medium text-theme-light px-3 max-w-full text-nowrap py-2 theme-dark-with-opacity md:mt-0 text-3xl ">
            {item.name}
          </h4>
        </ParallaxDiv>
        <ul className="text-theme-dark text-lg py-3">
          {item.details.map((detail, index) => (
            <li key={index} className="flex gap-1">
              <GoGoal className="mt-[.35rem] w-4 shrink-0 " size={14} />
              <div key={index}>{detail}</div>
            </li>
          ))}
        </ul>
      </div>
      {index < length - 1 && (
        <>
          <div className="absolute -bottom-4 right-0 h-4 w-4">
            <div className="bg-theme-primary relative z-[1] h-full w-full rounded-tr-3xl "></div>
            <div className="absolute top-0 bg-theme-light w-full h-full z-0 rounded-bl-full "></div>
          </div>
          <div className="absolute -bottom-4 left-0 h-4 w-4">
            <div className="bg-theme-primary relative z-[1] h-full w-full rounded-bl-3xl "></div>
            <div className="absolute top-0 bg-theme-light w-full h-full z-0 rounded-tr-full "></div>
          </div>
        </>
      )}
    </div>
  );
}