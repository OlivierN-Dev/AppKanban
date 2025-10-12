import React from "react";

type deleteBea = {
  id: string;
  text?: string;
  active?: boolean;
  img: string;
  onSelect: (id: string) => void;
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
      onClick={() => onSelect(id)}
      className={`flex gap-3 items-center p-3 cursor-pointer rounded-md transition-colors
        ${active ? "bg-[#635FC7] text-white" + `${(img = "../img/nav-li-dark.svg")}` : "text-[#828FA3] hover:bg-[#E4EBFA]" + `${(img = "../img/nav-li.svg")}`}`}
    >
      <img src={img} alt="logo-Board" />
      <span className="font-bold text-[15px]">{text}</span>
    </li>
  );
}
