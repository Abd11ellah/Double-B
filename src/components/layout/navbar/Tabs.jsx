"use client";
import { useRef } from "react";

function Tabs({ item }) {
  const clickRef = useRef();

  return (
    <div ref={clickRef} className=" relative h-full w-max">
      <div
        className={`relative h-full font-bold flex items-center gap-1 leading-[16px] text-additionalColorDark hover:text-mainColorPink cursor-pointer duration-[0.3s]`}
      >
        {item?.name}
      </div>
    </div>
  );
}

export default Tabs;
