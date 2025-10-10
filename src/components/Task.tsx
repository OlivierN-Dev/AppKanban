import React from "react";

export default function CreateTask({
  name = "name of the task is undifend",
  subtaks = 0,
  completedTask = 0
}) {
  return (
    <>
      <li className="bg-[#2B2C37] w-[90%] p-6 rounded-[8px] shadow-[0px_4px_6px_0px_#364E7E1A] ">
        <span className="text-white text-[15px] font-bold font-700">
          {name}
        </span>
        <span className="text-[#828FA3] text-[12px]">
          {subtaks > 0
            ? `${completedTask} of ${subtaks} subtasks`
            : "You have 0 subtask"}
        </span>
      </li>
    </>
  );
}
