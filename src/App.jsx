import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./Header";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState("bijali");
  return (
    <>
      <Header variable="bijali" />

      <div
        style={{
          backgroundColor: "red",
          height: "100px",
          width: "100px",
          border: "1px solid black",
          borderRadius: "10px",
          margin: "20px",
        }}
      >
        text send
      </div>
      <div>
        <h1>State handling - {name}</h1>
        <button onClick={() => setName("raj")}>state chnge btn</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Counter App</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
