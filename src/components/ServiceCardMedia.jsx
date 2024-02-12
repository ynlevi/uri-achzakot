import Image from "next/image";
import { GoGoal } from "react-icons/go";

export default function ServiceCardMedia({ item, index }) {
  return (
    <li
      className={`relative  rounded-xl bg-theme-light  w-[93vw] lg:w-[22rem]   `}
    >
      <div className="relative w-full h-72 top-0 ">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>

      <div className={`relative`}>
        <h4 className="backdrop-blur-[2px] absolute -top-16 font-medium text-theme-light p-4 py-2 theme-dark-with-opacity md:mt-0 text-3xl tracking-normal ">
          {item.name}
        </h4>
        <ul className="text-black p-4">
          {item.details.map((detail, index) => (
            <div className="flex gap-1">
              <GoGoal
                className="mt-[.35rem] w-4 shrink-0  border-black"
                size={14}
              />
              <li key={index}>{detail}</li>
            </div>
          ))}
        </ul>
      </div>
    </li>
  );
}
