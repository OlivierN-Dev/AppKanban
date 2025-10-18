import React from "react";

type TextProps = {
  nameValue?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  actions?: React.FormEventHandler<HTMLFormElement>;
};

export default function EditBoard({
  nameValue = "",
  onChange,
  actions,
}: TextProps) {
  return (
    <div className="w-[90%] flex flex-col absolute z-1 bg-[#2b2c37] p-6 rounded-md gap-6">
      <h2 className="text-white font-bold text-[18px] text-start">
        Edit Board
      </h2>
      <form
        onSubmit={actions}
        className="flex flex-col bg-[#2B2C37] w-full gap-6"
      >
        <label
          htmlFor="title"
          className="text-white font-bold flex flex-col justify-center items-start gap-2"
        >
          Board Name
          <input
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
            type="text"
            name="title"
            value={nameValue}
            onChange={onChange}
            placeholder="e.g. Web Design"
          />
        </label>

        <label
          htmlFor="description"
          className="text-white font-bold flex flex-col justify-center items-start gap-2"
        >
          Board Columns
          <input
            type="text"
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
            placeholder="Todo"
          />
        </label>

        <button
          type="button"
          className="font-bold w-full rounded-full py-2 px-4 bg-white text-[#635FC7]"
        >
          + Add New Column
        </button>

        <button
          type="submit"
          className="font-bold w-full rounded-full py-2 px-4 bg-[#635FC7] text-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
