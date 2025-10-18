"use client";

import React, { useState, useRef } from "react";
import Task from "@/components/Task";
import AddTask from "@/components/AddTask";
import Selectcolumn from "@/components/SelectColumn";
import DeleteDiv from "@/components/DeleteComp";
import ColumnName from "@/components/ColumnName";
import EditBoard from "@/components/editBoard";
import LiNav from "@/components/NavBarLi";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { text } from "stream/consumers";

type Board = {
  id: string;
  name: string;
};

type SubTask = {
  textSubTask?: string;
};

type Task = {
  id: string;
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
  const [editBoard, setEditBoard] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [BoardName, setBaordName] = useState("");
  const [CurrentBoard, setCurrentBoard] = useState("");
  const [CurrentNameAcc, setCurrentNameAcc] = useState("Olivier");
  const [columns, setColumns] = useState<Column[]>([]);
  const [columnName, setColumnName] = useState("");
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string, text: string) => {
    setSelectedId(id);
    setCurrentBoard(text);
    setSelectedBoardId(id);
  };
  const showNav = () => {
    if (allBoard.length === 0) return;
    setShowNavBar(true);
    setOpacity(true);
  };
  const closeNav = () => {
    setShowNavBar(false);
    setOpacity(false);
    setShowDelete(false);
  };
  const createBoard = () => {
    setShowBoardForm(true);
    setColumns([]);
  };
  const closeForm = () => {
    setShowBoardForm(false);
  };
  const openDeleteBoard = () => {
    setShowDelete(true);
    setOpacity(true);
  };
  const closeDeleteBoard = () => {
    setShowDelete(false);
    setOpacity(false);
  };

  const addBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nom = formData.get("Name");
    if (!nom || typeof nom !== "string") return;
    const newBoard: Board = { id: uuidv4(), name: nom };

    setAllBoard((prev) => [...prev, newBoard]);

    setCurrentBoard(nom);
    setSelectedId(newBoard.id);
    setSelectedBoardId(newBoard.id);
    setIsDisabled(false);
    setShowBoardForm(false);
    e.currentTarget.reset();

    setColumns([]);
  };

  const ChangeBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("title");
    if (!value || typeof value !== "string") return;

    if (!selectedBoardId) return;

    setAllBoard((prev) =>
      prev.map((board) =>
        board.id === selectedBoardId ? { ...board, name: value } : board
      )
    );

    setCurrentBoard(value);
    setEditBoard(false);
  };

  const addColumn = () => {
    const newColumn: Column = { id: uuidv4(), name: "" };
    setColumns((prev) => [...prev, newColumn]);
  };

  const del = (id: string) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  const deleteBoard = (id: string) => {
    setAllBoard((prev) => prev.filter((board) => board.id !== id));
    setSelectedId(null);
    setSelectedBoardId(null);
    setCurrentBoard("");
  };

  const isEmpty = allBoard.length === 0;
  const buttonText = isEmpty ? "+ Add Board" : "+ Add Column";
  const handleClick = isEmpty ? createBoard : addColumn;

  return (
    <div className="font-platform z-0 h-screen overflow-hidden">
      {opacity && (
        <div
          onClick={closeNav}
          className="fixed top-0 left-0 opacity-[50%] bg-black w-screen h-screen z-1"
        ></div>
      )}
      <header className="flex justify-between items-center bg-[#2b2c37] py-5 px-4">
        <div className="flex items-center gap-4">
          <img src="/img/logoBase.svg" alt="logoBase" />
          <div onClick={showNav} className="flex flex-row items-center gap-2">
            <h1 className="text-white font-bold flex items-center gap-2">
              {allBoard.length === 0 ? (
                "Create a Board"
              ) : allBoard.length === 1 ? (
                <>
                  {allBoard[0].name}
                  <img src="/img/arrowDown.svg" alt="arrow down" />
                </>
              ) : (
                <>
                  {CurrentBoard || "Select a Board"}
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
              onClick={() => setEditBoard(true)}
              className="py-1 px-4 rounded-full bg-[#635FC7] disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <i className="ri-pencil-fill text-white"></i>
            </button>
          </li>
          <li onClick={openDeleteBoard}>
            <img src="img/point.svg" alt="trois point" />
          </li>
        </ul>
      </header>

      <main className="bg-[#20212c] flex flex-col items-center justify-center text-center h-[100%] gap-6 relative">
        {showNavBar && (
          <div className="absolute top-5 mr-0 ml-0 bg-[#2B2C37] flex flex-col items-center gap-2 pb-2 rounded-[8px] w-[250px] z-2">
            <h3 className="text-[#828FA3] text-[12px] font-bold tracking-[2.4px] text-start w-[85%] p-2">
              <>
                ALL BOARD{allBoard.length > 1 && "S"}(
                <span>{allBoard.length}</span>)
              </>
            </h3>
            <ul className="w-[90%]">
              {allBoard.length === 0 ? (
                <>
                  <span className="text-white font-bold">
                    Vous avez 0 board
                  </span>
                </>
              ) : (
                <>
                  {allBoard.map((board) => (
                    <LiNav
                      key={board.id}
                      id={board.id}
                      text={board.name}
                      img="../img/nav-li.svg"
                      onSelect={handleSelect}
                      active={selectedId === board.id}
                    />
                  ))}
                </>
              )}
            </ul>
            <button
              onClick={createBoard}
              className={
                "flex gap-3 items-center p-3 cursor-pointer rounded-md text-start w-[90%]"
              }
            >
              <img src="../img/createNavBoard.svg" alt="img-create-board" />
              <span className=" text-[#635FC7] ">+ Create New Board</span>
            </button>
            <div className="bg-[#20212C] flex justify-center items-center gap-3 w-[90%] p-3 rounded-[6px]">
              <img src="../img/darkmodeSun.svg" alt="sun white mod" />
              <div className="bg-[#635FC7] p-1 w-[50px] flex items-center justify-end rounded-2xl">
                <div className="w-[20px] h-[18px] rounded-[50%] bg-white"></div>
              </div>
              <img src="../img/modenight.svg" alt="moon dark mod" />
            </div>
            <h2 className="text-white flex gap-3 font-bold items-center p-3 cursor-pointer transition-colors w-[90%]">
              Welcome to our App, {CurrentNameAcc}
            </h2>
          </div>
        )}
        <p className="text-[#828FA3] font-bold w-[80%] text-center">
          {allBoard.length === 0
            ? "This board is empty. Create a new Board to get started."
            : "This column is empty. Create a new column to get started."}
        </p>

        <button
          onClick={handleClick}
          className="text-white text-center bg-[#635FC7] py-2.5 px-[18px] rounded-full"
        >
          {buttonText}
        </button>

        {showForm && (
          <div className="absolute bg-[#2b2c37] text-white p-6 rounded-lg shadow-lg w-[350px] z-3">
            <h3 className="font-bold text-lg text-start mb-4">Add New Board</h3>

            <form onSubmit={addBoard} className="flex flex-col gap-4">
              <label className="flex flex-col text-left">
                <span className="mb-1 text-sm font-bold">Board Name</span>
                <input
                  type="text"
                  name="Name"
                  required
                  onChange={(e) => {
                    setBaordName(e.target.value);
                    setCurrentBoard(e.target.value);
                  }}
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
                    onChange={(e) => {
                      const newName = e.target.value;
                      setColumns((prev) =>
                        prev.map((c) =>
                          c.id === col.id ? { ...c, name: newName } : c
                        )
                      );
                    }}
                    onDelete={del}
                    text={"New Column"}
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
        {editBoard && (
          <EditBoard
            onSubmit={ChangeBoard}
            nameValue={CurrentBoard}
            onChange={(e) => setCurrentBoard(e.target.value)}
            columns={columns}
            setColumns={setColumns}
            onDeleteColumn={del}
          />
        )}

        {showDelete && selectedBoardId && (
          <DeleteDiv
            id={selectedBoardId}
            onCancel={closeDeleteBoard}
            type="Delete this board?"
            desci="Are you sure you want to delete this board? This action cannot be reversed."
            onDelete={(id) => {
              deleteBoard(id);
              setShowDelete(false);
              setSelectedBoardId(null);
              setOpacity(false);
            }}
          />
        )}
      </main>
    </div>
  );
}
