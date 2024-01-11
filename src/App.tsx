// import { addSum } from "./providers";
import "./App.css";

class Person {
  name: string;
  age: number;
  driversLicence: boolean;

  constructor(n: string, a: number, d: boolean) {
    this.name = n;
    this.age = a;
    this.driversLicence = d;
  }

  driversTest() {
    return `My name is ${this.name}, I'm ${this.age} years old and ${
      this.driversLicence ? "can" : "cannot"
    } drive.`;
  }
}

function App() {
  const personOne = new Person("Fredo", 30, true);
  const personTwo = new Person("Vero", 26, false);

  console.log(personOne);
  console.log(personTwo);

  return (
    <>
      <h1 className="text-4xl">Todo app</h1>
      <div>
        <p>{personOne.driversTest()}</p>
        <p>{personTwo.driversTest()}</p>
      </div>
    </>
  );
}

export default App;
