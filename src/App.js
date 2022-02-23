import { useState } from "react";
import "./App.css";
import DaCount from "./daCount";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = 10;
  const [incValue, setIncValue] = useState();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <input value={incValue} onChange={(e) => setIncValue(e.target.value)} />
      <DaCount
        name="Plus"
        increment={incValue}
        onClick={() => setCounter(counter + parseInt(incValue))}
      />
      <DaCount
        name="Minus"
        increment={incValue}
        onClick={() => setCounter(counter - parseInt(incValue))}
      />
    </div>
  );
}

export default App;
