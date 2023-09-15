import React from "react";
import "./App.css";
import useCaffeineLevel from "./useCaffeineLevel";

function App() {
  const { caffeineMl, drinkCoffee } = useCaffeineLevel();

  return (
    <div className="App">
      <div>
        <h1>Coder's Caffeine Level</h1>
        <p>{caffeineMl}ml left in the system</p>
        <button onClick={drinkCoffee}>
          Drink Coffee! (Quick! Before the next bug shows up!)
        </button>
      </div>
    </div>
  );
}

export default App;
