const AddButton = () => {
  return (
    <button className="bg-sky-500 py-2 w-full text-xs uppercase">Add</button>
  );
};

const RemoveButton = () => {
  return (
    <button className="bg-rose-500 py-2 w-full text-xs uppercase">
      Remove
    </button>
  );
};

const ResetButton = () => {
  return (
    <button className="bg-green-500 py-2 w-full text-xs uppercase">
      Reset
    </button>
  );
};

export { ResetButton, AddButton, RemoveButton };
