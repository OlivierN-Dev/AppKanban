import React from "react";

type deleteBeard = {
  id: string;
  type: string;
  desci: string;
  onDelete: (id: string) => void;
  onCancel: (id: string) => void;
};

export default function deleteTask({
  type = "",
  desci = "",
  id = "",
  onDelete,
  onCancel,
}: deleteBeard) {
  return (
    <div className="bg-[#2B2C37] w-11/12 flex flex-col gap-8 rounded-[6px] p-8 absolute z-3">
      <h3 className="text-start text-[#EA5555] font-bold text-[18px]">
        {type}
      </h3>
      <p className="text-[#828FA3] font-medium text-start">{desci}</p>
      <div className="flex flex-col gap-5">
        <button
          onClick={() => onDelete(id)}
          className="bg-[#EA5555] text-center p-3 text-white text-[13px] font-bold rounded-3xl"
        >
          Delete
        </button>
        <button
          onClick={() => onCancel(id)}
          className="bg-white text-center p-3 text-[#635FC7] text-[13px] font-bold rounded-3xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
