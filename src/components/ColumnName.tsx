import React from "react";

export default function columnName({
  name = "",
  colorBg = "",
  numberTask = 0,
}) {
  return (
    <div className="flex gap-3 justify-center ">
      <div
        className={`w-5 h-5 rounded-[50%]`}
        style={{ backgroundColor: colorBg }}
      ></div>
      <h3 className="text-[#828FA3] font-bold text-[12px] tracking-[2.4px]">
        {name} (<span>{numberTask}</span>)
      </h3>
    </div>
  );
}
