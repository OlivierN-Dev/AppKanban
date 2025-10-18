import React from "react";

type deleteBea = {
  id: string;
  text?: string;
  active?: boolean;
  img: string;
  onSelect: (id: string, text: string) => void;
};

export default function createLi({
  text = "",
  onSelect,
  id = "",
  active = false,
  img = "",
}: deleteBea) {
  return (
    <li
      onClick={() => onSelect(id, text)}
      className={`overflow-hidden flex gap-3 items-center p-3 cursor-pointer rounded-r-[999px] transition-colors w-[90%] ${
        active ? "text-white bg-[#635FC7]" : "text-[#828FA3] hover:bg-[#E4EBFA]"
      }`}
    >
      <img
        src={active ? "../img/nav-li-dark.svg" : "../img/nav-li.svg"}
        alt="logo"
      />
      <span className="font-bold text-[15px]">{text}</span>
    </li>
  );
}
