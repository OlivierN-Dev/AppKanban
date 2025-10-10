import React from "react";

export default function CreateAddMenu({}) {
  return (
    <>
      <form className="flex flex-col bg-[##2B2C37] items-center w-11/12 gap-6">
        <h2>Add New Task</h2>
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              placeholder="e.g. Take coffee break"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <input
              type="text"
              placeholder="e.g. It’s always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
            />
          </label>
        </div>
        <div>
          <label htmlFor="subtasks">
            Subtasks
            <div>
              <input type="text" name="subtasks" />
              <button>
                <i className="ri-close-line"></i>
              </button>
            </div>
          </label>
          <button type="submit">+Add Now Subtask</button>
        </div>
        <div>
          <label htmlFor="status">
            Status
            <select name="status">
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </>
  );
}
