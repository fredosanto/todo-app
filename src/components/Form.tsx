import { useState } from "react";

interface ItemProps {
  x: string;
  list: string[];
}

function Item({ x, list }: ItemProps) {
  function handleDelete() {
    console.log(x);
    console.log(list);
    list.slice(list.indexOf(x));
    console.log(list);
  }
  return (
    <li className="uppercase my-2">
      <div className="flex justify-around">
        <div>{x}</div>
        <button onClick={handleDelete} className="text-xs">
          Delete
        </button>
      </div>
    </li>
  );
}

function Form() {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<string[]>([]);
  const [message, setMessage] = useState<boolean>(false);

  const todoExist = todoArray.includes(todo);

  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    if (todoExist) {
      setMessage(true);
      return;
    }
    todoArray.push(todo);
    setTodoArray(() => [...todoArray]);
    setMessage(false);

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
      {message ? <div className="text-red-400">Task already exist</div> : ""}
      <div className="flex justify-between gap-1">
        <button
          onClick={handleAddTodo}
          className="bg-sky-500 py-2 w-full text-xs uppercase"
        >
          Add
        </button>
      </div>
      <ul id="todo-list">
        {todoArray.map((x) => (
          <Item key={todoArray.indexOf(x)} x={x} list={todoArray} />
        ))}
      </ul>
    </div>
  );
}

export { Form };
