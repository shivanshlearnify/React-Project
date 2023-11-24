import NumberSelector from "../NumberSelector/NumberSelector";
import TotalScore from "../TotalScore/TotalScore";
import RoleDice from "../RoleDice/RoleDice";
import styles from "./GamePlay.module.css";
import { useState } from "react";
import ButtonKey from "../ButtonKey/ButtonKey";
import Rules from "../Rules/Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [rules, setRules] = useState(false);

  const handleRules = () => {
    setRules((prev) => !prev);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleScore = () => {
    setScore(0);
  };

  const rolseDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    setSelectedNum();

    if (selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  const inlineStyles = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
  };

  return (
    <main className={styles.main}>
      <div className={styles.flex}>
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          err={error}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RoleDice currentDice={currentDice} rolseDice={rolseDice} />
      <div className={styles.dice}>
        <div className={styles.btn}>
          <ButtonKey
            style={inlineStyles}
            toggle={handleScore}
            name={"Reset Score"}
          />
          <ButtonKey
            toggle={handleRules}
            name={"show Rules" }
          />
        </div>
      </div>
      {rules && <Rules />}
    </main>
  );
};

export default GamePlay;
