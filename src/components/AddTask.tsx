import React from "react";

export default function CreateAddMenu({ name = "" }) {
  return (
    <div className="w-[90%] flex flex-col absolute z-1 bg-[#2b2c37] p-6 rounded-md gap-6">
      <h2 className="text-white font-bold text-[18px] text-start">{name}</h2>
      <form className="flex flex-col bg-[##2B2C37] w-full gap-6">
        <div>
          <label
            htmlFor="title"
            className="text-white font-bold flex flex-col justify-center items-start gap-2"
          >
            Title
            <input
              className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
              type="text"
              name="title"
              placeholder="e.g. Take coffee break"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-white font-bold flex flex-col justify-center items-start gap-2"
          >
            Description
            <input
              type="text"
              className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
              placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
            />
          </label>
        </div>
        <div className="flex flex-col justify-center w-full gap-3">
          <label
            htmlFor="subtasks"
            className="text-white font-bold flex flex-col justify-center items-start gap-2"
          >
            Subtasks
            <div className="w-full flex items-center justify-center gap-4">
              <input
                className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
                type="text"
                placeholder="e.g. Make coffee"
              />
              <button>
                <img src="../img/close.svg" alt="close" />
              </button>
            </div>
          </label>
              <button
                type="button"
                className="font-bold w-full rounded-full py-2 px4 bg-white text-[#635FC7]"
              >
                + Add New Subtask
              </button>
        </div>
        <div>
          <label
            htmlFor="status"
            className="text-white font-bold flex flex-col justify-center text-start gap-2"
          >
            Status
            <select name="status" className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4">
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>
          <button type="submit" className="font-bold w-full rounded-full py-2 px4 bg-[#635FC7] text-white">Create Task</button>
      </form>
    </div>
  );
}
