import React from "react";

type ColumnsSelectProps = {
  id: string;
  text?: string;
  name?: string;
  valuename?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
};

export default function ColumnsSelect({
  id = "",
  text = "",
  name = "",
  valuename = "",
  onChange,
  onDelete,
}: ColumnsSelectProps) {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <input
        className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
        type="text"
        value={valuename}
        name={name}
        placeholder={text}
        onChange={onChange}
      />
      <button onClick={() => onDelete(id)} className="">
        <img src="../img/close.svg" alt="close" />
      </button>
    </div>
  );
}
