
import { useState } from "react";
import "./App.css"
import Homepage from "./Components/Homepage/Homepage";
import GamePlay from "./Components/GamePlay/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggle = ()=>{
    setIsGameStarted((prev) => !prev)
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <Homepage toggle={toggle}/>
      }
      
    </div>
  );
}

export default App;
