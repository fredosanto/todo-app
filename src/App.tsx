// import { addSum } from "./providers";
import { ResetButton, AddButton, RemoveButton } from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl">Todo app</h1>
      <div className="flex justify-between gap-1">
        <AddButton />
        <ResetButton />
        <RemoveButton />
      </div>
    </>
  );
}

export default App;
