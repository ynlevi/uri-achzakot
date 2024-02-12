"use client";
import Image from "next/image";

export default function ServiceCardDesktop({ item, index }) {
  return (
    <li
      className={` border-2 border-theme-dark rounded-xl relative w-[93vw] h-72 lg:w-[22rem] lg:border-0 `}
      //   style={index === 0 && { flex: "1 1 0", height: "25rem" }}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="rounded-xl object-cover"
      />
      <div
        className={`absolute bottom-6 font-medium text-white tracking-wide p-4 py-2 theme-dark-with-opacity md:mt-0`}
        style={{
          backdropFilter: "blur(2px)",
          "-webkitBackdropFilter": "blur(2px)",
        }}
      >
        <h4 className="text-3xl tracking-normal ">{item.name}</h4>
      </div>
    </li>
  );
}
