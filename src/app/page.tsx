"use client";

import React, { useState, useRef } from "react";
import Task from "@/components/Task";
import AddTask from "@/components/AddTask";
import Selectcolumn from "@/components/SelectColumn";
import DeleteDiv from "@/components/DeleteComp";
import ColumnName from "@/components/ColumnName";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

type Board = {
  id: string;
  name: string;
};

type SubTask = {
  textSubTask?: string;
};

type Task = {
  id: number;
  name: string;
  subtask?: SubTask[];
};

type Column = {
  id: string;
  name: string;
  tasks?: Task[];
};

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [allBoard, setAllBoard] = useState<Board[]>([]);
  const [showForm, setShowBoardForm] = useState(false);
  const [BoardName, setBaordName] = useState("");
  const [columns, setColumns] = useState<Column[]>([]);
  const [columnName, setColumnName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const createBoard = () => {
    setShowBoardForm(true);
  };
  const closeForm = () => {
    setShowBoardForm(false);
  };
  const addBoard = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const nom = formData.get("Name");
    if (!nom || typeof nom !== "string") return;
    const newBoard: Board = { id: uuidv4(), name: nom };
    setAllBoard((prev) => [...prev, newBoard]);
    setShowBoardForm(false);
  };

  const addColumn = () => {
    const newColumn: Column = { id: uuidv4(), name: "" };
    setColumns((prev) => [...prev, newColumn]);
  };

  const del = (id: string) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  // const editColumn = () => {

  // }

  return (
    <div className="font-platform z-0">
      <header className="flex justify-between items-center bg-[#2b2c37] py-5 px-4">
        <div className="flex items-center gap-4">
          <img src="/img/logoBase.svg" alt="logoBase" />
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-white font-bold flex items-center gap-2">
              {allBoard.length === 0 ? (
                "Create a Board"
              ) : (
                <>
                  {allBoard[0]?.name}
                  <img src="/img/arrowDown.svg" alt="arrow down" />
                </>
              )}
            </h1>
          </div>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <button
              disabled={isDisabled}
              className="py-2.5 px-[18px] rounded-full bg-[#635FC7] disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <img src="img/add.svg" alt="add" />
            </button>
          </li>
          <li>
            <img src="img/point.svg" alt="trois point" />
          </li>
        </ul>
      </header>

      <main className="bg-[#20212c] flex flex-col items-center justify-center text-center h-[90vh] gap-6 relative">
        <AddTask name="Add New Task" />
        <p className="text-[#828FA3] font-bold w-[80%] text-center">
          {allBoard.length === 0
            ? "This board is empty. Create a new Board to get started."
            : "This column is empty. Create a new column to get started."}
        </p>

        <button
          onClick={allBoard.length === 0 ? createBoard : addColumn}
          className="text-white text-center bg-[#635FC7] py-2.5 px-[18px] rounded-full"
        >
          {allBoard.length === 0 ? "+ Add Board" : "+ Add Column"}
        </button>

        {showForm && (
          <div className="absolute bg-[#2b2c37] text-white p-6 rounded-lg shadow-lg w-[350px]">
            <h3 className="font-bold text-lg text-start mb-4">Add New Board</h3>

            <form
              ref={formRef}
              onSubmit={addBoard}
              className="flex flex-col gap-4"
            >
              <label className="flex flex-col text-left">
                <span className="mb-1 text-sm font-bold">Board Name</span>
                <input
                  type="text"
                  name="Name"
                  value={BoardName}
                  onChange={(e) => setBaordName(e.target.value)}
                  placeholder="e.g. Marketing Plan"
                  className="p-2 w-full rounded border border-[#3e3f4e]"
                />
              </label>
              <label className="flex flex-col text-left gap-3">
                <span className="mb-1 font-bold text-sm">Board Columns</span>
                {columns.map((col) => (
                  <Selectcolumn
                    key={col.id}
                    id={col.id}
                    valuename={col.name}
                    onChange={(e) => {
                      const newName = e.target.value;
                      setColumns((prev) =>
                        prev.map((c) =>
                          c.id === col.id ? { ...c, name: newName } : c
                        )
                      );
                    }}
                    onDelete={del}
                    text={col.name || "New Column"}
                    name="Columns"
                  />
                ))}
              </label>
              <button
                type="button"
                onClick={addColumn}
                className="w-full rounded-full py-2 px4 bg-white text-[#635FC7]"
              >
                + Add New Column
              </button>
              <button
                type="submit"
                className="w-full rounded-full py-2 px4 bg-[#635FC7] text-white"
              >
                Create New Board
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
