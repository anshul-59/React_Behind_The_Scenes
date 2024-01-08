import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");
  // step-1 : All the states are getting updated and the then the
  //          functions are created on the first  render
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <>
      {/* step-2: before excuting the whole code the Header componenet is executed first. */}
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        {/* step-3: Counter componenet is then rendered. it passes the chosen count to the Counter component*/}
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
