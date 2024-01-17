import { useState } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  //   const [todoArray, setTodoArray] = useState([]);
  const list = document.getElementById("ul");
  const listItem = document.createDocumentFragment();
  const todoArray: string[] = [];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(todo);
    todoArray.push(...todoArray, todo);
    console.log(todoArray);
    // console.log(setTodoArray);
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
          onClick={handleSubmit}
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
