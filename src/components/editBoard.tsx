type Column = {
  id: string;
  name: string;
  tasks?: any[];
};

type TextProps = {
  nameValue?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  columns?: Column[];
  setColumns?: React.Dispatch<React.SetStateAction<Column[]>>;
  onDeleteColumn?: (id: string) => void;
};

export default function EditBoard({
  nameValue = "",
  onChange,
  onSubmit,
  columns = [],
  setColumns,
  onDeleteColumn,
}: TextProps) {
  return (
    <div className="w-[90%] flex flex-col absolute z-1 bg-[#2b2c37] p-6 rounded-md gap-6">
      <h2 className="text-white font-bold text-[18px] text-start">
        Edit Board
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <label className="text-white font-bold flex flex-col gap-2">
          Board Name
          <input
            type="text"
            name="title"
            value={nameValue}
            onChange={onChange}
            placeholder="e.g. Web Design"
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
          />
        </label>

        <label className="text-white font-bold flex flex-col gap-2">
          Board Columns
          {columns.map((col) => (
            <div key={col.id} className="flex gap-2 items-center">
              <input
                type="text"
                value={col.name}
                onChange={(e) => {
                  if (!setColumns) return;
                  const newName = e.target.value;
                  setColumns((prev) =>
                    prev.map((c) =>
                      c.id === col.id ? { ...c, name: newName } : c
                    )
                  );
                }}
                placeholder="Column name"
                className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4 mb-1"
              />
              {onDeleteColumn && (
                <button
                  type="button"
                  onClick={() => onDeleteColumn(col.id)}
                  className=""
                >
                  <img src="../img/close.svg" alt="close" />
                </button>
              )}
            </div>
          ))}
        </label>

        <button
          type="button"
          onClick={() => {
            if (!setColumns) return;
            const newCol: Column = { id: crypto.randomUUID(), name: "" };
            setColumns((prev) => [...prev, newCol]);
          }}
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
