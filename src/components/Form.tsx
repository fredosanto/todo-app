import { useState } from "react";

function Form() {
  const [todo, setTodo] = useState<string>("");

  const [todoArray, setTodoArray] = useState<string[]>([]);

  const list = document.getElementById("ul");
  const listItem = document.createDocumentFragment();

  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    todoArray.push(todo);
    setTodoArray(() => [...todoArray]);

    console.log(todoArray);
  }
  return (
    <div className="flex flex-col gap-2">
      <input
        id="todo-input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="p-2 rounded-md text-black"
      />
      <div className="flex justify-between gap-1">
        <button
          onClick={handleAddTodo}
          className="bg-sky-500 py-2 w-full text-xs uppercase"
        >
          Add
        </button>
      </div>
      <ul id="todo-list"></ul>
    </div>
  );
}

export { Form };
