import { useState } from "react";

interface ItemProps {
  x: string;
}

function Item({ x }: ItemProps) {
  return <li className="uppercase my-2">{x}</li>;
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

  function handleDelete({ x }: ItemProps) {
    console.log(x);
    const newArray = todoArray.filter((e) => e !== x);
    console.log(newArray);
    setTodoArray(newArray);
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
          <div key={todoArray.indexOf(x)} className="flex justify-around">
            <Item x={x} />
            <button onClick={() => handleDelete({ x })} className="text-xs">
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { Form };
