import React from "react";

type ColumnsSelectProps = {
  text?: string;
  name?: string;
  valuename?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ColumnsSelect({
  text = "",
  name = "",
  valuename = "",
  onChange,
}: ColumnsSelectProps) {
  return (
    <div className="w-[100%] flex items-center justify-center gap-2">
      <input
        className="border border-[#828FA340] rounded text-white text-[13px] w-[86%] py-2 px-4"
        type="text"
        value={valuename}
        name={name}
        placeholder={text}
        onChange={onChange}
      />
      <button>
        <i className="ri-close-line text-[#828FA3] text-4xl"></i>
      </button>
    </div>
  );
}
